import { Box, Paper, Stack } from "@mui/material"
import { useState } from "react"
import { Background, Controls, ReactFlow, Node, Edge } from "reactflow"
import 'reactflow/dist/style.css'

// statically define nodes and edges
const nodes: Node[] = [
    {id: 'skgstat', position: {x: 300, y: 100}, data: {label: 'SciKit-GStat'}},
    {id: 'uncertainty', position: {x: 0, y: 50}, data: {label: 'SciKit-GStat: Uncertainty'}},
    {id: 'gstools', position: {x: 0, y: 180}, data: {label: 'GSTools'}},
    {id: 'gstatsim', position: {x: 180, y: 200}, data: {label: 'GStatSim'}},
    {id: 'sklearn', position: {x: 180 + 180, y: 220}, data: {label: 'SciKit-Learn'}}
]

const edges: Edge[] = [
    {id: 'skgstat-uncertainty', source: 'uncertainty', target: 'skgstat', label: 'extends', type: 'step'},
    {id: 'skgstat-gstools', source: 'skgstat', target: 'gstools', label: 'exports', type: 'step'},
    {id: 'skgstat-gstatsim', source: 'skgstat', target: 'gstatsim', label: 'interfaces', type: 'step'},
    {id: 'skgstat-sklearn', source: 'skgstat', target: 'sklearn', label: 'interfaces', type: 'step'},
]

// create object holding the code samples
const VARIO = "import skgstat as skg\nimport pandas as pd\n\n\n# read a data from a CSV\ndata = pd.read_csv('data.csv')\n\n# create a variogram model\nvario = skg.Variogram(\n\tdata[['x', 'y']].values,\n\tdata.observarions.values\n)\n\n"
const CODE: {[key: string]: {code: string}} = {
    'skgstat': {
        code: "# create a plot of the variogram\nvario.plot()"
    },
    gstools: {
        code: "# export to a gstools.CovModel\ncov = vario.to_gstools()\n\n# generate a random field using GStools\nimport gstools as gs\n\nx = y = range(100)\nfield = gs.SRF(cov)\nfield.structured([x, y])\n\n# plot\n field.plot()"
    },
    gstatsim: {
        code: "# import gstatsim as gss\n\n# create a prediction grid\ngrid = gss.Gridding.prediction_grid(0, 100, 0, 100, 1)\n\n# create the simulation object\n# with 12 neighbors and 150 pixel search\nsim = gss.Interpolation.okrige_sgs(\n\tgrid,\n\tdata,\n\t'x', 'y', 'observations',\n\t12,\n\tvario,\n\t150\n)\n\n# extract the mesh\nxx = grid[:,0].reshape((100,100))\nyy = grid[:,1].reshape((100,100))\n\n# plot\nfig, ax = plt.subplots(1, 1)\nax.pcolormesh(xx, yy, sim.reshape(-1,1), cmap='gist_earth')"
    },
    sklearn: {
        code: "# "
    },
    uncertainty: {
        code: "# SkGstat-Uncertainty does not provide an example."
    }
}


const SoftwareFlowchart: React.FC = () => {
    // create a state to handle the currently clicked node
    const [currentNode, setCurrentNode] = useState<string | null>(null)

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{height: 500, width: 550}}>
                <ReactFlow nodes={nodes} edges={edges} onNodeClick={(_, node) => setCurrentNode(node.id)}>
                    <Background />
                    <Controls />
                </ReactFlow>
            </Box>
            <Paper elevation={3} sx={{height: 500, p: 0, m:0}}>
                <pre style={{width: '350px', textAlign: 'left', margin: 0, height: '100%'}}>
                    <code data-trim data-noescape style={{borderRadius: '5px', padding: '15px'}} data-line-numbers="5,6,8-12">
                        {currentNode ? `${VARIO}${CODE[currentNode].code}` : '# No node selected.'}
                    </code>
                </pre>
            </Paper>
        </Stack>
    )
}

export default SoftwareFlowchart