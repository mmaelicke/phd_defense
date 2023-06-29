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
            <MainSlide title="Build on tested software">
                <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                    <LI className="fragment fade-up">- Containerized SciKit-GStat could reproduce the 2020 results exactly</LI>
                    <LI className="fragment fade-up">- Clustered variogram <strong>parameters</strong> instead of empirical variograms</LI>
                    <LI className="fragment fade-up">- (Generic) workflow tool was used to test different scenarios</LI>
                    <LI className="fragment fade-up">- Lays the foundation for facilitating development of new methods</LI>
                </Stack>
            </MainSlide>
            
            {/* ADD A APPENDIX SLIDE ABOUT THE tool-runner here  */}
            
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

            <MainSlide title="Appendix: Mean shift">
                <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                    <Box component="img" src="img/appendix_mean_shift.png" sx={{maxHeight: '450px'}} />
                </Paper>
            </MainSlide>
        </section>

        {/* <MainSlide title="Going beyond classic variogram analysis">
            <Box className="r-stack">
            <Box className="fragment custom blur-out" data-fragment-index="2">
                <Paper elevation={3} sx={{p: 0, width: 'fit-content', m: 'auto'}} className="r-stack">
                    <Box component="img" src="img/default_variogram.png" sx={{maxHeight: '450px'}} />
                    <Box component="img" src="img/default_variogram_hist.png" sx={{maxHeight: '450px'}} className="fragment" data-fragment-index="1" />
                </Paper>
            </Box>
            <Stack direction="column" sx={{p: 3}} className="info-box fragment zoom-in" data-fragment-index="2">
                <LI>- Semi-variance is an expected value of (lagged) observation residuals</LI>
                <LI>- Histogram helps to assess empirical variogram, but not with <strong>interpretation</strong></LI>
                <LI className="fragment" data-fragment-index="3">- Correlation can be simplistically reduced to the effective range</LI>
                <LI className="fragment" data-fragment-index="4">=&gt; experimental visualization to add a new perspective</LI>
            </Stack>
            </Box>
        </MainSlide> */}

        <MainSlide title="Force-directed graphs">
            <ForceGraphExample />
        </MainSlide>

        <MainSlide title="Cluster mean covariance graph">
            <Paper elevation={3}>
                <ClusterGraphs />
            </Paper>
        </MainSlide>

        <MainSlide title="Benchmark Graphs">
            <Paper elevation={3} sx={{width: 'fit-content'}} className="r-stack">
                <Box className="fragment custom blur-out" data-fragment-index="2">
                    <GraphExamples />
                </Box>
                <Stack direction="column" spacing={3} sx={{p: 3}} className="fragment zoom-in info-box" data-fragment-index="2">
                    <LI>- Each benchmark field exhibits distinctly different graphs</LI>
                    {/* <LI className="fragment">- Shapes of the graphs vary significantly between benchmark fields</LI> */}
                    <LI className="fragment">- Graphs exhibit clear differences in their evolution.</LI>
                </Stack>
            </Paper>
        </MainSlide>

        <MainSlide title="Cluster covariance graph emergence">
            <Paper elevation={3} sx={{p: 1, width: 'fit-content', m: 'auto'}} className="r-stack">
                <Box component="img" src="img/graph_emergence_1.png" sx={{maxHeight: '450px'}} />
                <Box className="fragment" data-fragment-index="1">
                    <Box component="img" src="img/graph_emergence_2.png" sx={{maxHeight: '450px'}} className="fragment custom blur-out" data-fragment-index="2" />
                </Box>
                <Stack direction="column" spacing={3} sx={{p: 3}} className="fragment zoom-in info-box" data-fragment-index="2">
                    <LI>- Cluster emerge differently, but converge into a similar state</LI>
                    <LI className="fragment" data-fragment-index="3">- Capturing these differences in a metric is challenging</LI>
                </Stack>
            </Paper>
        </MainSlide>

        <MainSlide title="Summary">
            <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                <LI>- Experimental visualization of a datasets' correlation structure is possible</LI>
                <LI className="fragment fade-up">- Graphs exhibit clear differences between benchmark fields</LI>
                <LI className="fragment fade-up">- Cluster graphs converge into a very similar state</LI>
                <LI className="fragment fade-up">- Hard to link the graphs back to variogram parameters</LI>
            </Stack>
        </MainSlide>

        {/* <MainSlide title="Outlook">
            <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                <LI>- Add force-directed graphs to the software and publish the results</LI>
                <LI className="fragment fade-up">- Assess more graph theoretical metrics to grasp differences in the graphs</LI>
                <LI className="fragment fade-up">- Clustering of variogram parameters: Mean shift?</LI>
                <LI className="fragment fade-up" sx={{pl: 5}}>- difficult to define a distance in parameter space</LI>
                <LI className="fragment fade-up" sx={{pl: 5}}>- hierachical clustering, terminated with respect to (observation) uncertainty</LI>
            </Stack>
        </MainSlide> */}

    </>)
}

export default SoilMoisture