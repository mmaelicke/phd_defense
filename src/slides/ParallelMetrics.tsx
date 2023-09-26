import { useRef, useState } from "react";
import { Data, Layout, ScatterData } from "plotly.js";
import Plot from "react-plotly.js";
import { Box, MenuItem, Select, Slide, Tab, Tabs } from "@mui/material";

// laod the pre-calculated plotly.js plots from a JSON file
import MODELS_DATA from "./data/theoretical_models.json";
import PARCAT_DATA from "./data/metric_parcat.json";

import PARCAT_1 from "./data/metric_parcat_step0.json";
import PARCAT_2 from "./data/metric_parcat_step1.json";
import PARCAT_3 from "./data/metric_parcat_step2.json";

const PARCAT = {step0: PARCAT_1, step1: PARCAT_2, step2: PARCAT_3}

const ParallelMetrics = () => {
    // state to control the tab selection
    const [tab, setTab] = useState<'models' | 'metrics'>('models');
    const [parcatStep, setParcatStep] = useState<'step0' | 'step1' | 'step2'>('step0');

    // add a ref to the container
    const containerRef = useRef<HTMLDivElement>()

    return (<Box sx={{width: '100%'}} component="div" ref={containerRef}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}} display="flex" flexDirection="row" justifyContent="space-between">        
            <Tabs value={tab} onChange={(_, val) => setTab(val)}>
                <Tab value="models" label="Models" />
                <Tab value="metrics" label="Metrics" />
            </Tabs>
            {tab === 'metrics' ? (
                <Select value={parcatStep} onChange={e => setParcatStep(e.target.value as any)} sx={{right: 0}}>
                    <MenuItem value="step0">All models</MenuItem>
                    <MenuItem value="step1">Gaussian model</MenuItem>
                    <MenuItem value="step2">Exponential model</MenuItem>
                </Select>
            ) : null }
        </Box>
        { tab === 'models' ? (
            <Slide in direction="right" container={containerRef.current}>
                <Box>
                <Plot
                    data={MODELS_DATA.data as unknown as ScatterData[]}
                    layout={{...MODELS_DATA.layout as object, autosize: true} as Layout} 
                    style={{width: '100%', height: '400px'}}
                />
                </Box>
            </Slide>
        ) : null }
        { tab === 'metrics' ? (
            <Slide in direction="left" container={containerRef.current}>
                <Box>
                    <Plot
                        data={PARCAT[parcatStep].data as unknown as Data[]}
                        layout={{...PARCAT[parcatStep].layout as object, autosize: true} as Layout}
                        style={{width: '100%', height: '400px'}}
                    />
                    
                </Box>
            </Slide>
        ) : null }
    </Box>)
}

export default ParallelMetrics