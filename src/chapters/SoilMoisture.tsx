import { Box, Paper, Stack, Typography } from "@mui/material"

import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"
import ForceGraphExample from "../slides/ForceGraphExample"
import GraphExamples from "../slides/GraphExamples"
import ClusterGraphs from "../slides/ClusterGraphs"
import LI from "../components/LI"

const SoilMoisture: React.FC = () => {
    return (<>

        <Outline highlight="moisture" />

        <MainSlide title="">
            <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                <Box component="img" src="img/Attert.png" sx={{maxHeight: '450px'}} />
                <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                    Figure changed after <a href="https://hess.copernicus.org/articles/23/3807/2019/#section3" target="_blank" rel="noreferrer">Loritz et al. (2019)</a>
                </Typography>
            </Paper>
        </MainSlide>

        <MainSlide title="Soil Moisture" id="start-soil-moisture" autoAnimate>
            <Paper elevation={3} className="r-stack" sx={{p: 2, m: 'auto', width: 'fit-content'}}>
                <Box component="img" src="img/moisture_cluster_step1.png" sx={{maxHeight: '450px'}}  />
                <Box component="img" src="img/moisture_cluster_step2.gif" sx={{maxHeight: '450px'}} className="fragment" data-fragment-index="1" />
                <Box className="fragment" data-fragment-index="2">
                    <Box component="img" src="img/moisture_cluster_step3.png" sx={{maxHeight: '450px'}} className="fragment custom blur-out" data-fragment-index="3" />
                </Box>
                
                <Box className="fragment zoom-in" data-fragment-index="3">
                    <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                        <LI>- The clusters evolve cohesively over time</LI>
                        <LI>- In general, clusters can be attributed to different processes</LI>
                    </Stack>
                </Box>
            </Paper>
        </MainSlide>

        <MainSlide title="Force-directed graphs">
            <ForceGraphExample />
        </MainSlide>

        <MainSlide title="Benchmark Graphs">
            <Paper elevation={3}>
                <GraphExamples />
            </Paper>
        </MainSlide>

        <MainSlide title="Cluster mean covariance graph">
            <Paper elevation={3}>
                <ClusterGraphs />
            </Paper>
        </MainSlide>

    </>)
}

export default SoilMoisture