import { Box, Stack, BoxProps, Paper, Icon } from "@mui/material";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import MainSlide from "../components/MainSlide";
import { ReactNode, useEffect, useState } from "react";

// highlight JS
import highlight from 'highlight.js';
import python from 'highlight.js/lib/languages/python';
import yaml from 'highlight.js/lib/languages/yaml';
import txt from 'highlight.js/lib/languages/plaintext';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/monokai.css'
import { Code } from "@gregcello/revealjs-react";


// get the valid SX props
type SX = BoxProps["sx"]

// static code example
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

// define the SX props for the hoverBoxes
const hoverSX: SX = {
    width: "160px",
    border: "1px solid black",
    p: 1,
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": { backgroundColor: "rgba(0,0,0,0.2)", cursor: "pointer" },
};

const inputSX: SX = {
    width: "200px",
    height: "60px",
    border: "1px solid black",
    p: 0.8,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    ":hover": { backgroundColor: "#e0e0e0", cursor: "pointer" },
};


const DockerOverviewSlide: React.FC = () => {
    // add state to handle the code example
    const [currentNode, setCurrentNode] = useState<string>('')

    // load the correct highlight.js language
    useEffect(() => {
        // skip if no code selected
        if (!Object.keys(CODE).includes(currentNode)) return

        if (CODE[currentNode].type === 'yaml') highlight.registerLanguage('yaml', yaml)
        else if (CODE[currentNode].type === 'python') highlight.registerLanguage('python', python)
        else if (CODE[currentNode].type === 'json') highlight.registerLanguage('json', json)
        else highlight.registerLanguage('txt', txt)

        highlight.highlightAll()
    }, [currentNode])

    return (<>
        <MainSlide title="What is so different?" autoAnimate id="framework">
            <Box data-id="docker-frame" sx={{border: '1px solid #1D63ED', p: 5, borderRadius: '15px'}}>
                <Box data-id="docker-img" component="img" src="img/docker.png" sx={{maxHeight: 400, maxWidth: 600}} />
            </Box>

            <aside className="notes">
                <p>The alternative builds on a very mature and common software for containerization, called docker. Simply speaking you can think of docker as a lightweight virtual machine.</p>
            </aside>
        </MainSlide>

        <MainSlide title="What is so different?" autoAnimate visibility="uncounted">
            <Stack direction="row" spacing={5} justifyContent="space-around">
                <Stack direction="column" spacing={3}>
                    <Box className="fragment fade-down" data-fragment-index="3" sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Box className="r-stack">
                            <Box sx={inputSX} style={{marginTop: '14px', marginRight: '15px'}}></Box>
                            <Box sx={inputSX} style={{marginTop: '10px', marginRight: '12px'}}></Box>
                            <Box sx={inputSX} onClick={() => setCurrentNode('params')}>
                                data &amp; parameter
                            </Box>
                        </Box>
                        <Icon component={KeyboardDoubleArrowDown} sx={{fontSize: '3rem'}} />
                    </Box>
                    <Box data-id="docker-frame" sx={{height: '100%', border: '1px solid #1D63ED', p: 1, borderRadius: '15px', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Stack direction="column" spacing={3} sx={{minHeight: 60, mb: 1}}>
                            <Box className="fragment" data-fragment-index="1"  sx={hoverSX} onClick={() => setCurrentNode('yaml')}>tool.yml</Box>
                            <Box className="fragment" data-fragment-index="1" sx={hoverSX} onClick={() => setCurrentNode('tool')}>run.py</Box>
                        </Stack>
                        <Box data-id="docker-img" component="img" src="img/docker.png" sx={{maxHeight: 48, maxWidth: 600}} />
                    </Box>
                    <Box className="fragment fade-up" data-fragment-index="3" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Icon component={KeyboardDoubleArrowDown} sx={{fontSize: '3rem'}} />
                        <Box className="r-stack">
                            <Box sx={inputSX} style={{marginTop: '13px', marginRight: '15px'}}></Box>
                            <Box sx={inputSX} style={{marginTop: '10px', marginRight: '12px'}}></Box>
                            <Box sx={inputSX} onClick={() => setCurrentNode('output')}>
                                result &amp; logs
                            </Box>
                        </Box>
                    </Box>
                </Stack>
                <Paper elevation={3} sx={{height: 500, p: 0.5, m: 0, borderRadius: '15px'}} className="fragment" data-fragment-index="2">
                    <Code
                        language={currentNode === 'yaml' ? 'yaml' : currentNode === 'tool' ? 'python' : 'text'}
                        style={{height: '100%', width: '600px', textAlign: 'left', margin: 0, borderRadius: '15px', fontSize: '16pt', overflowY: 'auto'}}
                        lineNumbers
                    >
                        {({
                            code: Object.keys(CODE).includes(currentNode) ?  CODE[currentNode].code : '# no example available'
                        } as unknown) as {code: string} & ReactNode}
                    </Code>
                </Paper>
            </Stack>

            <aside className="notes">
                <p>We want to build each of our tools into a docker container.</p>
                <p>To do so, we need to specify metadata in a simple machine-readable file, called tool.yaml</p>
                <p>Beside a title and a description, we can provide hints on data format and define needed parameter. The tool itself can be written in any langauge and at any level of proficiency. Here, I chose a single file script without much fuss.</p>
                <p>Parameters and data have to be provided as files, and the container is now effectively mapping input onto outputs. Inputs, outputs and logfiles are finally bundled together with the container state, which is in my opinion a step towards result provenance.</p>
            </aside>
        </MainSlide>
    </>)
}

export default DockerOverviewSlide