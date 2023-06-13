import { useEffect, useState } from "react"
import { Box, Paper, Stack } from "@mui/material"
import { Background, Controls, ReactFlow, Node, Edge, MarkerType } from "reactflow"
import 'reactflow/dist/style.css'

// highlight JS
import highlight from 'highlight.js';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/monokai.css'

// statically define nodes and edges
const nodes: Node[] = [
    {id: 'skgstat', position: {x: 300, y: 150}, data: {label: 'SciKit-GStat'}},
    {id: 'uncertainty', position: {x: 0, y: 50}, data: {label: 'SciKit-GStat: Uncertainty'}},
    {id: 'gstools', position: {x: 0, y: 280}, data: {label: 'GSTools'}},
    {id: 'gstatsim', position: {x: 180, y: 300}, data: {label: 'GStatSim'}},
    {id: 'sklearn', position: {x: 180 + 180, y: 320}, data: {label: 'SciKit-Learn'}},
    {id: 'geostat', position: {x: 180 + 180, y: 50}, data: {label: 'Geostat-Apps'}},
    {id: 'third', position: {x: 180, y: 50}, data: {label: 'Third-Party Apps'}},
]

const edges: Edge[] = [
    {id: 'skgstat-uncertainty', source: 'uncertainty', target: 'skgstat', label: 'extends', type: 'step', markerEnd: {type: MarkerType.Arrow}},
    {id: 'skgstat-gstools', source: 'skgstat', target: 'gstools', label: 'exports', type: 'step', markerEnd: {type: MarkerType.Arrow}},
    {id: 'skgstat-gstatsim', source: 'skgstat', target: 'gstatsim', label: 'interfaces', type: 'step', markerEnd: {type: MarkerType.Arrow}},
    {id: 'skgstat-sklearn', source: 'skgstat', target: 'sklearn', label: 'interfaces', type: 'step', markerEnd: {type: MarkerType.Arrow}},
    {id: 'skgstat-geostat', source: 'skgstat', target: 'geostat', label: 'builds on', type: 'step', markerEnd: {type: MarkerType.Arrow}},
    {id: 'skgstat-third', source: 'skgstat', target: 'third', label: 'builds on', type: 'step', markerEnd: {type: MarkerType.Arrow}},
]

// create object holding the code samples
const VARIO = "import skgstat as skg\nimport pandas as pd\n\n\n# read a data from a CSV\ndata = pd.read_csv('data.csv')\n\n# create a variogram model\nvario = skg.Variogram(\n\tdata[['x', 'y']].values,\n\tdata.observarions.values\n)\n\n"
const CODE: {[key: string]: {code: string, preamble: boolean}} = {
    'skgstat': {
        code: "# create a plot of the variogram\nvario.plot()",
        preamble: true
    },
    gstools: {
        code: "# export to a gstools.CovModel\ncov = vario.to_gstools()\n\n# generate a random field using GStools\nimport gstools as gs\n\nx = y = range(100)\nfield = gs.SRF(cov)\nfield.structured([x, y])\n\n# plot\n field.plot()",
        preamble: true
    },
    gstatsim: {
        code: "import gstatsim as gss\n\n# create a prediction grid\ngrid = gss.Gridding.prediction_grid(0, 100, 0, 100, 1)\n\n# create the simulation object\n# with 12 neighbors and 150 pixel search\nsim = gss.Interpolation.okrige_sgs(\n\tgrid,\n\tdata,\n\t'x', 'y', 'observations',\n\t12,\n\tvario,\n\t150\n)\n\n# extract the mesh\nxx = grid[:,0].reshape((100,100))\nyy = grid[:,1].reshape((100,100))\n\n# plot\nfig, ax = plt.subplots(1, 1)\nax.pcolormesh(xx, yy, sim.reshape(-1,1), cmap='gist_earth')",
        preamble: true
    },
    sklearn: {
        code: "from skgstat.interfaces import VariogramEstimator\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.model_selection import GridSearchCV\n\n# setup a Variogram estimator\nvario = VariogramEstimator(maxlag=0.65, estimator='matheron')\n\n# build the pipeline\npipe = Pipeline([\n\t('scaler', StandardScaler()),\n\t('variogram', vario)\n])\n\n# make a grid search for parameters\ngs = GridSearchCV(pipe, param_grid=dict(\n\tmodel=['spherical', 'gaussian', 'exponential'],\n\tn_lags=[12, 15, 18, 20, 25]\n\t)\n)\n\n# Fit and run\n gs = gs.fit(X, y)\n\nprint(gs.best_estimator_)\n# VariogramEstimator(model='spherical', n_lags=25)",
        preamble: false
    },
    uncertainty: {
        code: "# SkGstat-Uncertainty does not provide an example.",
        preamble: false
    },
    geostat: {
        code: "# Geostat-Apps does not provide an example.",
        preamble: false
    },
    third: {
        code: "# Third-Party Apps does not provide an example.",
        preamble: false
    }
}


const SoftwareFlowchart: React.FC = () => {
    // create a state to handle the currently clicked node
    const [currentNode, setCurrentNode] = useState<string | null>(null)

    useEffect(() => {
        highlight.registerLanguage('python', python)
        highlight.highlightAll()
      }, [currentNode])

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{height: 550, width: 510}}>
                <ReactFlow nodes={nodes} edges={edges} onNodeClick={(_, node) => setCurrentNode(node.id)}>
                    <Background />
                    <Controls />
                </ReactFlow>
            </Box>
            <Paper elevation={3} sx={{height: 500, p: 0, m:0}}>
                <pre style={{width: '400px', textAlign: 'left', margin: 0, fontSize: '8pt', height: '100%'}}>
                    <code className="language-python" data-trim data-noescape style={{borderRadius: '5px', padding: '15px'}}>
                        {currentNode ? `${CODE[currentNode].preamble ? VARIO : ''}${CODE[currentNode].code}` : '# No node selected.'}
                    </code>
                </pre>
            </Paper>
        </Stack>
    )
}

export default SoftwareFlowchart