import { Box, Paper, Stack } from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import ReactFlow, { Background, Controls, Edge, MarkerType, Node } from "reactflow"
import 'reactflow/dist/style.css'

// highlight JS
import highlight from 'highlight.js';
import python from 'highlight.js/lib/languages/python';
import yaml from 'highlight.js/lib/languages/yaml';
import txt from 'highlight.js/lib/languages/plaintext';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/monokai.css'
import { Code } from "@gregcello/revealjs-react";

// statically define the nodes and edges
const nodes: Node[] = [
    {id: 'params', position: {x: 0, y: 0}, type: 'input', data: {label: 'Parameters'}},
    {id: 'data', position: {x: 250, y: 0}, type: 'input', data: {label: 'Data files'}},
    {id: 'docker', position: {x: 0, y: 80}, type: 'input', data: {label: 'Docker'}, style: {height: 250, width: 400, backgroundColor: 'rgba(0,0,0,0)'}},
    {id: 'yaml', position: {x: 20, y: 40}, extent: 'parent', parentNode: 'docker', data: {label: 'tool.yaml'}},
    {id: 'tool', position: {x: 180, y: 150}, parentNode: 'docker', data: {label: 'run.py'}},
    {id: 'output', position: {x: 200, y: 420}, type: 'output', data: {label: 'Output files & logs'}},
]

const edges: Edge[] = [
    {id: 'params-yaml', source: 'params', target: 'yaml', markerEnd: {type: MarkerType.Arrow}},
    {id: 'tool-run', source: 'yaml', target: 'tool', type: 'step', markerEnd: {type: MarkerType.Arrow}},
    {id: 'data-run', source: 'data', target: 'tool', markerEnd: {type: MarkerType.Arrow} },
    {id: 'docker-output', source: 'docker', target: 'output', markerEnd: {type: MarkerType.Arrow}}
]

const CODE: {[key: string]: {code: string, type: string}} = {
    'tool': {
        type: 'python',
        code: `
[...]
from json2args import get_parameter

# load some helper functions
from tool_lib import align_data, get_strides

# get the toolname
toolname = os.environ.get('TOOL_RUN', 'moving-window').lower()

# get the parameterization
kwargs = get_parameter()

if toolname == 'moving-window':
    # get all needed parameters
    try:
        # align the input data
        positions, data = align_data(**kwargs)

        # get the params
        window_size = kwargs['window_size']

        # build the strides-iterator
        strides = get_strides(data, positions, window_size)
    except Exception as e:
        print(str(e))
        raise e

    # container for the variograms
    varios = []

    # go for each stride 
    for i, (pos, obs) in enumerate(strides):
        # remove NaN
        vals = obs[~np.isnan(obs)]
        coords = pos[~np.isnan(obs)]

        # here it is possible, that all obs are NaN
        if len(vals) == 0:
            print(f'{i}-All NaN input data at position: {i}')
            continue
        # build the variogram
        varios.append(skg.Variogram(coords, vals, **vario_params))

    # store the results
    params = np.asarray([v.parameters for v in varios])
    np.savetxt('/out/variogram_parameters.dat', params)

# no tool selected
else:
    sys.exit(f'The tool {toolname} is not known.')
`},
    'yaml': {
        type: 'yaml',
        code: `
tools:
    moving-window:
        title: Moving window dispersion functions
        description: [...]
    parameters:
        window_size:
            type: integer
            description: The size of the moving window
        variogram:
            type: struct
            description: | 
                Mapping of variogram parameters as defined 
                by SciKit-GStat
    data:
        observations:
            type: timeseries
        positions:
            type: dataframe
            description: | 
                 'x', ['y', 'z'] headed list of positions 
                 in the order of the timeseries
`},
    'output': {
        type: 'text',
        code: `
RUNNING TOOL 'moving-window'
EXTENDED OUTPUT: true
PYTHON: 3.10.4 (default, Sep  9 2021, 13:59:19)
[GCC 11.2.0]
OS: Linux-5.10.47-linuxkit-x86_64-with-glibc2.31
CPU: x86_64
[...]

Running for 140 iterations:
0-All NaN input data at position: 0
1-All NaN input data at position: 1
Done.

Writing output to /out/variogram_parameters.dat
Runtime: 14.203s

Checksums:
INPUT:  e57e0393***
OUTPUT: 0e3a5b5d***
ENV:    cd4e84f4***
`},
    'params': {
        type: 'json',
        code: `
    {
        "moving-window": {
            "parameters": {
                "window_size": 10,
            },
            "data": {
                "observations": "observations.csv",
                "positions": "positions.csv"
            }
        }
    }
`}
}

const WorkflowFlowchart: React.FC = () => {
    // setup the component state
    const [currentNode, setCurrentNode] = useState<string>('yml')

    // use highlightjs
    useEffect(() => {
        // skip if the node has no code example
        if (!Object.keys(CODE).includes(currentNode)) {
            return
        }
        
        // otherwise load the correct language
        if (CODE[currentNode].type === 'yaml') {
            highlight.registerLanguage('yaml', yaml)
        } else if (CODE[currentNode].type === 'python') {
            highlight.registerLanguage('python', python)
        } else if (CODE[currentNode].type === 'json') {
            highlight.registerLanguage('json', json)
        } else {
            highlight.registerLanguage('text', txt)
        }
        highlight.highlightAll()
    }, [currentNode])

    // render
    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{height: 550, width: 510, margin: 'auto'}}>
                <ReactFlow nodes={nodes} edges={edges} onNodeClick={(_, node) => Object.keys(CODE).includes(node.id) ? setCurrentNode(node.id) : null}>
                    <Background />
                    <Controls />
                </ReactFlow>
            </Box>
            <Paper elevation={3} sx={{height: 500, p: 1, m: 0}}>
                <Code
                    language={currentNode === 'yaml' ? 'yaml' : currentNode === 'tool' ? 'python' : 'text'}
                    style={{height: '100%', width: '400px', textAlign: 'left', margin: 0, borderRadius: '15px', fontSize: '12pt'}}
                    lineNumbers
                >
                    {({
                        code: Object.keys(CODE).includes(currentNode) ?  CODE[currentNode].code : '# no example available'
                    } as unknown) as {code: string} & ReactNode}

                </Code>
            </Paper>
        </Stack>
    )
}

export default WorkflowFlowchart