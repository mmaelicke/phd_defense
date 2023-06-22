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

        <MainSlide title="Attert catchment in Luxembourg" id="start-soil-moisture" autoAnimate>
            <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                <Box component="img" src="img/Attert.png" sx={{maxHeight: '450px'}} />
                <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                    Figure changed after <a href="https://hess.copernicus.org/articles/23/3807/2019/#section3" target="_blank" rel="noreferrer">Loritz et al. (2019)</a>
                </Typography>
            </Paper>
        </MainSlide>

        <MainSlide title="Moving window variogram models" autoAnimate>
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

        <section>
            <MainSlide title="" autoAnimate>
                <Stack direction="row">
                    <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                        <Box component="img" src="img/moisture_cluster_step3.png" 
                            sx={{width: '400px', '&:hover': {width: '700px', position: 'absolute', top: '80px', left: '50px', zIndex: 100}}} 
                        />
                    </Paper>
                    <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                        <Box component="img" src="img/maelicke_clustergram.png" 
                            sx={{width: '450px', '&:hover': {width: '900px', position: 'absolute', top: '80px', left: '50px', zIndex: 100}}} 
                        />
                    </Paper>
                </Stack>
            </MainSlide>
        {/* add an appendix to this slide */}
            <MainSlide title="Appendix: Mean shift">
                <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                    <Box component="img" src="img/appendix_mean_shift.png" sx={{maxHeight: '450px'}} />
                </Paper>
            </MainSlide>
        </section>

        <MainSlide title="Summary">
            <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                <LI>- Moving variograms cluster with temporal coherence</LI>
                <LI className="fragment fade-up">- Clustering of variogram <strong>parameters</strong> yieled very similar results</LI>
                <LI className="fragment fade-up">- Geostatistical software could reproduce the 2020 results rapidly</LI>
                <LI className="fragment fade-up">- Lays the foundation for facilitating development of new methods</LI>
            </Stack>
        </MainSlide>

        <MainSlide title="Going crazy">
            <Stack></Stack>
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