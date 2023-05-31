import randn from "@stdlib/random/base/randn";
import ones from "@stdlib/array/base/ones";
import { useState } from "react";
import { Data, Layout } from "plotly.js";
import { Box, Slider, Stack, Zoom } from "@mui/material";
import Plot from "react-plotly.js";

// generate a random master dataset
const R = randn.factory({ seed: 42 })
const MASTER_SAMPLE = ones(500).map(() => R() * 2.3 + 8.0)


const KFoldExample: React.FC = () => {
    // component state to make up an example
    const [iteration, setIteration] = useState<number>(0)

    // state to store the plot data
    const [data, setData] = useState<Partial<Data>[]>([])
    const [layout, setLayout] = useState<Partial<Layout>>({})

    return (
        <Zoom in>
            <Stack spacing={3} direction="column" alignItems="center" sx={{p: 1}}>
                <Box sx={{p: 2, width: '100%'}}>
                    <Slider value={iteration} min={0} max={7} valueLabelDisplay="auto" onChange={(_, v) => setIteration(v as number)} />
                </Box>
                <Plot data={data} layout={layout} style={{height: '400px'}} />
            </Stack>
        </Zoom>
    )
}

export default KFoldExample