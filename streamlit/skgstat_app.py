from typing import Tuple

import streamlit as st
import numpy as np
from skgstat import plotting
import skgstat as skg

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
    custom='Manual fit'
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


    # add the model parameters
    with st.sidebar.expander('Variogram Model', expanded=False):
        # model
        model = st.selectbox("Model Type", options=list(MODELS.keys()), format_func=lambda x: MODELS[x])
        use_nugget = st.checkbox("Use Nugget", value=False)

        # fit method
        fit_method = st.selectbox("Fit Method", options=list(FIT_METHOD.keys()), format_func=lambda x: FIT_METHOD[x])
        fit_params = dict(fit_mehtod=fit_method)

        if fit_method == 'custom':
            _r = st.slider("Effective range", value=100.0, min_value=0.1, max_value=1000.0, step=0.1)


    # build the variogram
    vario = skg.Variogram(
        coords, 
        values,
        estimator=estimator,
        bin_method=bin_method,
        n_lags=n_lags,
        maxlag=maxlag,
        model=model,
        use_nugget=use_nugget,
        normalize=False
    )

    # return 
    return vario

def main_app():
    st.title("SciKit-GStat")

    # build the variogram
    vario = build_variogram()

    # finally plot the variogram
    fig = vario.plot(show=False)
    fig.update_layout(legend=dict(orientation='h'))
    st.plotly_chart(fig, use_container_width=True)


if __name__ == "__main__":
    # first set some general parameters
    st.set_page_config(page_title="SciKit-GStat", layout="wide")
    import fire
    fire.Fire(main_app)
