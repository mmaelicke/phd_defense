from typing import Tuple

import streamlit as st
import numpy as np
from skgstat import plotting
import skgstat as skg
import plotly.graph_objects as go

# set the backend to plotly
plotting.backend('plotly')

# set up some lookup dicts
MODELS = dict(
    spherical='Spherical',
    exponential='Exponential',
    gaussian='Gaussian',
    matern='Matérn',
    stable='Stable',
    cubic='Cubic',
)

BIN_METHOD = dict(
    even='Evenly Spaced',
    uniform='Uniform Count',
    scott='Scott\' Rule',
    doane='Doane\'s Rule',
    fd='Freedman-Diaconis\' Estimator',
    sq='Square Root',
    sturges='Sturges\' Rule',
    kmeans='K-Means clustering',
    ward='Ward\'s hierarchical clustering',
)

ESTIMATORS = dict(
    matheron='Matheron',
    cressie='Cressie-Hawkins',
    dowd='Dowd-Estimator',
#    genton='Genton\'s Estimator'
)

FIT_METHOD = dict(
    trf='Trust Region Reflective',
    lm='Levenberg-Marquardt',
    manual='Manual fit'
)

@st.cache_data
def load_data() -> Tuple[np.ndarray, np.ndarray]:
    """Load and return the pancake dataset"""
    coords, values = skg.data.pancake(N=500).get("sample")
    
    return coords, values

def build_variogram() -> skg.Variogram:
    # get the data
    coords, values = load_data()

    # add the parameters
    with st.sidebar.expander('Empirical Variogram', expanded=True):
        # estimator
        estimator = st.selectbox("Estimator", options=list(ESTIMATORS.keys()), format_func=lambda x: ESTIMATORS[x])

        # bin method
        bin_method = st.selectbox("Bin Method", options=list(BIN_METHOD.keys()), format_func=lambda x: BIN_METHOD[x])

        # add n_lags only if needed
        if bin_method in ['even', 'uniform', 'ward', 'kmeans']:
            n_lags = st.number_input("Number of Lags", value=10, min_value=3, max_value=100, step=1)
        else:
            n_lags = 10
        # maxlag
        maxl_method = st.selectbox("Maxlag Method", options=['no maxlag', 'median', 'mean', 'absolute', 'relative'])
        if maxl_method == 'absolute':
            st.markdown('The absoulte maximum separating distance is given in the unit of the coordinates.')
            maxlag = st.number_input("Absolute maxlag", value=100.0, min_value=1.1, step=10.0)
        elif maxl_method == 'relative':
            maxlag = st.slider("Relative maxlag", value=0.6, min_value=0.01, max_value=0.99, step=0.01)
        elif maxl_method == 'no maxlag':
            maxlag = None
        else:
            maxlag = maxl_method

    # build the variogram
    vario = skg.Variogram(
        coords, 
        values,
        estimator=estimator,
        bin_func=bin_method,
        n_lags=n_lags,
        maxlag=maxlag,
        normalize=False
    )

    # add the model parameters
    with st.sidebar.expander('Variogram Model', expanded=False):
        # model
        model = st.selectbox("Model Type", options=list(MODELS.keys()), format_func=lambda x: MODELS[x])
        use_nugget = st.checkbox("Use Nugget", value=False)

        # update the variogram
        vario.model = model
        vario.use_nugget = use_nugget
        
        # fit method
        fit_method = st.selectbox("Fit Method", options=list(FIT_METHOD.keys()), format_func=lambda x: FIT_METHOD[x])

        if fit_method == 'manual':
            fit_params = dict(method='manual')
            fit_params['range'] = st.slider("Effective range", value=float(np.mean(vario.bins)), min_value=float(vario.bins[0]), max_value=float(vario.bins[-1]), step=0.1)
            if use_nugget:
                _n, _s = st.slider("Nugget & Sill", value=(0.0, float(0.8 * vario.experimental.max())), min_value=0.0, max_value=float(1.5*vario.experimental.max()), step=0.1)
                fit_params['nugget'] = _n
                fit_params['sill'] = _s
            else:
                _s = st.slider("Sill", value=float(0.8 * vario.experimental.max()), min_value=0.0, max_value=float(1.5*vario.experimental.max()), step=0.1)
                fit_params['sill'] = _s
            
            vario.fit(**fit_params)
        else:
            fs = st.selectbox("Fit Sigma", options=['No weights', 'linear', 'sq'])
            fit_sigma = fs if fs != 'No weights' else None
        
            # fit the variogram
            vario.fit_method = fit_method
            vario.fit_sigma = fit_sigma

    # return 
    return vario

def main_app():
    #st.title("SciKit-GStat")

    # build the variogram
    vario = build_variogram()

    # build a grid
    row = st.container()

    # finally plot the variogram
    fig = vario.plot(show=False)
    fig.update_layout(legend=dict(orientation='h'))
    row.plotly_chart(fig, use_container_width=True)

    # check if the user wants diagnostics and plots
    show_diag = st.sidebar.checkbox("Show metrics", value=False)
    show_plots = st.sidebar.checkbox("Show plots", value=False)
    
    # buidl the right amount of columns
    if show_diag and not show_plots:
        frmse, crmse, _ = st.columns(3)
    elif show_diag and show_plots:
        frmse, plt1, plt2 = st.columns((2, 4, 4))
        crmse = frmse
    elif not show_diag and show_plots:
        plt1, plt2 = st.columns(2)
    
    if show_diag:
        # add some metrics
        frmse.metric('Fit - RMSE', value=float(vario.rmse.round(1)))
        crmse.metric('CV - RMSE', value=float(vario.cross_validate(n=200, seed=42).round()))

    if show_plots:
        # add other plots
        pp_plot = vario.distance_difference_plot(show=False)
        plt1.plotly_chart(pp_plot, use_container_width=True)

        # get a kriging 
        krige = vario.to_gs_krige()
        x = np.linspace(0, np.max(vario.coordinates[:, 0]), 100)
        y = np.linspace(0, np.max(vario.coordinates[:, 1]), 100)
        field, sigma = krige.structured([x, y])

        fig = go.Figure(go.Surface(x=x, y=y, z=field, colorscale='Earth_r'))
        plt2.plotly_chart(fig, use_container_width=True)


if __name__ == "__main__":
    # first set some general parameters
    st.set_page_config(page_title="SciKit-GStat", layout="wide")
    import fire
    fire.Fire(main_app)
