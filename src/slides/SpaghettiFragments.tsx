import { ReactNode, useEffect } from "react";
import { Paper, Stack } from "@mui/material";
import { Code } from "@gregcello/revealjs-react";
import ReactImageMagnify from "react-image-magnify";

// highlight js stuff
import highlight from 'highlight.js';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/monokai.css'


// put the static code here
const PREAMBLE = `# preamble

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv(..., sep=';', parse_dates=True)
pos = pd.read_csv(...)

# parameters
model = 'stable'
window_size = 10
maxlag = 100
bandwidth = 30
cl_threshold = 0.95
rank = False
`

const METHOD = `# Method implementation

def moving_window(data, pos, wsize, rank=True):
  for i in range(len(data) - wsize):
    # condense
    sls = data.iloc[i:i+wsize]

    # remove NaN
    sls = sls.where(sls.isna(), how='any').dropna()

    # apply variogram
    _bla = pd.merge(sls, pos)

    # variogram
    yield skg.Variogram(_bla[['x', 'y']].values ...)
`

const VIS = `# Visualization

def plot():
  fig, ax = plt.subplots(2, 2, figsize=(10, 10))

  # all data
  data.plot(legend=False, c='b', ax=ax[0, 0])

  # variograms
  for i, var in enumerate(varios):
    ax[0, 1].plot(X, var.fitted_model(X), c=cm[i])

  return fig
`

const RESULT = `# Result

varios = tqdm(list(moving_window(data, pos, ...)))

# do some plotting
fig = plot()
fig.savefig('/my_paper/fig2.pdf')

# make LaTeX table of v-params
p_df = pd.DataFrame([v.parameters for v in varios])
p_df.to_latex('/my_paper/vario_params_table.tex')
`


const SpaghettiFragments: React.FC = () => {
    // load highlight js
    useEffect(() => {
        highlight.registerLanguage('python', python);
        highlight.highlightAll();
    })

    return (<>
        <Stack direction="row" spacing={1} justifyContent="space-between" sx={{height: 500}}>

                <Stack direction="column" spacing={1} justifyContent="space-between">
                    <Paper className="fragment" elevation={3} sx={{height: 230, width: 400, p: 0.5, m:0, borderRadius: '15px'}}>
                        <Code language="python" style={{height: '100%', width: '100%', textAlign: 'left', margin: 0, borderRadius: '15px', fontSize: '16pt', overflowY: 'auto'}}>
                        {({code: PREAMBLE} as unknown) as {code: string} & ReactNode}
                        </Code>
                    </Paper>

                    <Paper className="fragment" elevation={3} sx={{height: 230, width: 400, p: 0.5, m:0, borderRadius: '15px'}}>
                        <Code language="python" style={{height: '100%', width: '100%', textAlign: 'left', margin: 0, borderRadius: '15px', fontSize: '16pt', overflowY: 'auto'}}>
                        {({code: METHOD} as unknown) as {code: string} & ReactNode}
                        </Code>
                    </Paper>
                </Stack>

            
            <ReactImageMagnify style={{zIndex: 99}} smallImage={{isFluidWidth: false, width: 40, height: 500, src: 'img/companion_code_small.png'}} largeImage={{src: 'img/companion_code.png', width: 700, height: 22000}} enlargedImageContainerDimensions={{width: 400, height: 450}}/>
            
            <Stack direction="column" spacing={1} justifyContent="space-between">
                    <Paper className="fragment" elevation={3} sx={{height: 230, width: 400, p: 0.5, m:0, borderRadius: '15px'}}>
                        <Code language="python" style={{height: '100%', width: '100%', textAlign: 'left', margin: 0, borderRadius: '15px', fontSize: '16pt', overflowY: 'auto'}}>
                        {({code: VIS} as unknown) as {code: string} & ReactNode}
                        </Code>
                    </Paper>

                    <Paper className="fragment" elevation={3} sx={{height: 230, width: 400, p: 0.5, m:0, borderRadius: '15px'}}>
                        <Code language="python" style={{height: '100%', width: '100%', textAlign: 'left', margin: 0, borderRadius: '15px', fontSize: '16pt', overflowY: 'auto'}}>
                        {({code: RESULT} as unknown) as {code: string} & ReactNode}
                        </Code>
                    </Paper>
                </Stack>
        </Stack>
    </>)
}

export default SpaghettiFragments;