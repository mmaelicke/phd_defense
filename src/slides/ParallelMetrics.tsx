import { Box, Slide, Tab, Tabs } from "@mui/material";

// laod the pre-calculated plotly.js plots from a JSON file
import MODELS_DATA from "./data/theoretical_models.json";
import PARCAT_DATA from "./data/metric_parcat.json";
import Plot from "react-plotly.js";
import { Data, Layout, ScatterData } from "plotly.js";
import { useState } from "react";



const ParallelMetrics = () => {
    // state to control the tab selection
    const [tab, setTab] = useState<'models' | 'metrics'>('models');

    return (<>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={tab} onChange={(_, val) => setTab(val)}>
                <Tab value="models" label="Theoretical models" />
                <Tab value="metrics" label="Performance metrics" />
            </Tabs>
        </Box>
        { tab === 'models' ? (
            <Slide in direction="right">
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
            <Slide in direction="left">
                <Box>
                    <Plot
                        data={PARCAT_DATA.data as unknown as Data[]}
                        layout={{...PARCAT_DATA.layout as object, autosize: true} as Layout}
                        style={{width: '100%', height: '400px'}}
                    />
                </Box>
            </Slide>
        ) : null }
    </>)
}

export default ParallelMetrics