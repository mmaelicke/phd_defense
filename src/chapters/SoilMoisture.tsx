import { Box, Paper, Stack, Typography } from "@mui/material"
import ReactImageMagnify from 'react-image-magnify'

import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"
import ForceGraphExample from "../slides/ForceGraphExample"
import GraphExamples from "../slides/GraphExamples"
import ClusterGraphs from "../slides/ClusterGraphs"
import LI from "../components/LI"
import WorkflowFlowchart from "../slides/WorkflowFlowchart"

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

            <aside className="notes">
                <p>Now we are leaving the emerging field of pancake geostatistics behind and turn to more meaningful datasets from a hydrological point of view. We use a soil moisture dataset observed in the Attert catchment in Luxembourg. Specifically, we used data from the Colpach sub-catchment, which consists of approximately 60 different locations with soil moisture measurements at three different depths.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Moving window variogram models" autoAnimate id="moving">
            <Paper elevation={3} className="r-stack" sx={{p: 2, m: 'auto', width: 'fit-content'}}>
                <Box component="img" src="img/moisture_cluster_step1.png" sx={{maxHeight: '450px'}}  />
                <Box component="img" src="img/moisture_cluster_step2.gif" sx={{maxHeight: '450px'}} className="fragment" data-fragment-index="1" />
                <Box className="fragment" data-fragment-index="2">
                    {/* <Box component="img" src="img/moisture_cluster_step3.png" sx={{maxHeight: '450px'}} className="fragment custom blur-out" data-fragment-index="3" /> */}
                    <Box component="img" src="img/moisture_cluster_step3.png" sx={{maxHeight: '450px'}} />
                </Box>
                
                {/* <Box className="fragment zoom-in" data-fragment-index="3">
                    <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                        <LI>- The clusters evolve cohesively over time</LI>
                        <LI>- In general, clusters can be attributed to different processes</LI>
                    </Stack>
                </Box> */}
            </Paper>

            <aside className="notes">
                <p>For this analysis, I focused on the measurements at a depth of 30 cm, using data from the year 2015.</p>
                <p>To analyze the soil moisture data, I calculated variograms using a moving window approach with a window size of 30 days. The variograms reflect the relationship between the spatial distances and the differences in soil moisture values.</p>
                <p>As depicted in the graph, during dry periods, the variograms exhibit a nugget effect with a low sill value, indicating little correlation between nearby locations.</p>
                <p>However, in the fall, as rainfall increases, the sill values rise, indicating stronger spatial correlation, and the shape of the models may change slightly. The correlation length also becomes shorter during heavy rainfall events towards the end of the year.</p>
                <p>Next, I employed the mean-shift clustering algorithm to cluster the variogram parameters and colored everyting accoding to the three identified clusters. </p>
                <p>Unlike the original 2020 publication, I did not cluster the empirical variograms themselves. Instead, I utilized the capabilities of the software to reproduce the analysis within minutes and explore alternative clustering methods.</p>
                <p>The clustering results are quite promising, as they reveal three distinct clusters primarily differentiated by their sill values. This matches the original publication very well.</p>
                <p>By examining the lower plot depicting the time series, we can observe that the clusters emerge coherently over time. Each cluster can be associated with different processes: the yellow cluster represents drying and dry conditions, the green cluster signifies wet soil conditions, and the blue cluster indicates a transient state.</p>
                <p>With proper research software, I could reproduce the results from 2020 and improve on them effordlessly, while preparing this presentation.</p>
            </aside>
        </MainSlide>
        
        <MainSlide title="2020's code">
                <Stack direction="row" spacing={1} sx={{margin: 'auto'}}>
                    <Stack direction="column" sx={{height: '500px', width: '150px'}}>
                        {/* Put the marking colors here */}
                        <Box style={{height: '25px', width: '100%', backgroundColor: '#FFC2C2', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="1"><span>Imports</span></Box>
                        <Box style={{height: '25px', width: '100%', backgroundColor: '#FFF8DC', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="1"><span>Parameters</span></Box>
                        <Box style={{height: '25px', width: '100%', backgroundColor: '#B2FFB2', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="1"><span>Load data</span></Box>
                        <Box style={{height: '80px', width: '100%', backgroundColor: '#D2B48C', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="1"><span>Method</span></Box>
                        <Box style={{height: '80px', width: '100%', backgroundColor: '#B2CCFF', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="1"><span>Visualization</span></Box>
                        <Box style={{height: '25px', width: '100%', backgroundColor: '#FFE5B4', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="1"><span>Results</span></Box>
                        <Box style={{height: '40px', width: '100%', backgroundColor: '#B2CCFF', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="2"><span>Visualization</span></Box>
                        <Box style={{height: '80px', width: '100%', backgroundColor: '#D2B48C', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="3"><span>Method</span></Box>
                        <Box style={{height: '60px', width: '100%', backgroundColor: '#B2CCFF', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="4"><span>Visualization</span></Box>
                        <Box style={{height: '60px', width: '100%', backgroundColor: '#FFE5B4', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="fragment" data-fragment-index="4"><span>Results</span></Box>
                    </Stack>
                    <Box sx={{maxWidth: 500, margin: 'auto'}}>
                        <ReactImageMagnify smallImage={{isFluidWidth: false, width: 40, height: 500, src: 'img/companion_code_small.png'}} largeImage={{src: 'img/companion_code.png', width: 700, height: 22000}} enlargedImageContainerDimensions={{width: 400, height: 450}}/>
                    </Box>
                </Stack>

                <aside className="notes">
                    <p>SciKit-GStat does not make research, but offers generic varigraphy tools. The code I wrote at the time for the 2020 paper, is shown here. It's a pretty straightforward research spaghetti-code. It implements the methods building on SciKit-GStat, loads the data and creates all figures published.</p>
                    <p>I would argue that it is a solid, well-constructed, typical research spaghetti code with conventional structuring. A preamble of imports and parameters, followed by a section of used methods implemented as functions and the final visualisation and result generation.</p>
                    <p>Then, you do some additional result visualization,</p>
                    <p>Re-implement all the methods to satisfy your reviewers' feedback, while keeping your original methods,</p>
                    <p>And finally visualize and generate the updated results for the revised manuscript. Multiple iterations are possible. Thus, you end-up with a very specific script, that only makes sense in the context of the publication and way harder to be extended as you intended it to be. That makes it at least questionable, if your method is really replicable into other contexts.</p>
                </aside>
        </MainSlide>

        <MainSlide title="What is so different?" id="framework">
            <Box className="r-stack">
                <Box className="fragment" data-fragment-index="1">
                <Box className="fragment custom blur-out" data-fragment-index="2">
                    <WorkflowFlowchart />
                </Box>
                </Box>
                <Box className="fragment zoom-in" data-fragment-index="2">
                    <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                        <LI>- Transparent about the data used</LI>
                        <LI>- Parameterization clearly separated from data</LI>
                        <LI>- Context and environment saved along with input &amp; output</LI>
                    </Stack>
                </Box>
            </Box>

            <aside className="notes">
                <p>
                I want to introduce a framework designed to address the issues outlined, all while allowing scientists to maintain their preferred working methods. At its core, this framework relies on Docker, a containerization engine capable of bundling software together with all necessary dependencies, including system requirements.
                The tool for computing variograms within a moving window is illustrated here. Each tool needs a machine-readable, easily organized file to provide minimal metadata, requiring at least a title and description. Additionally, this file outlines input data formats and available tool parameters.
                Parameters for configuring the tool and the data are separated as external inputs, provided in files. I provide client applications which simplify input creation from common formats or HTTP calls for Python and NodeJS.
               Tools can be implemented in any language, at any proficiency level, mapping input to output files. The implementation is now more concises and significantly clearer. Templates are available for Octave, Matlab, Python, R, and NodeJS, streamlining input and generating logs and standard result file formats, like netCDF, CSV or HTML.
                </p>
                <p>Beside an improved runability and replicability, the implemented methods are more transparent about data and define their context more clearly.</p>

            </aside>
        </MainSlide>

        <section>
            <MainSlide title="Build on tested software">
                <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                    <LI>- Containerized SciKit-GStat could reproduce the 2020 results exactly</LI>
                    <LI className="fragment fade-up">- Clustered variogram <strong>parameters</strong> instead of empirical variograms</LI>
                    <LI className="fragment fade-up">- Existing workflow tool can used to to run container</LI>
                    <LI className="fragment fade-up">- Lays the foundation for facilitating development of new methods</LI>
                </Stack>

                <aside className="notes">
                    <p>To wrap this part up, I used a containerized version of SciKit-GStat, which allowed replication of the original 2020 results.</p>
                    <p>The software provides a robust and reproducible environment where different scenarios can be tested. For example, I explored various window sizes, clustered using different metrics, and even clustered variogram models instead of empirical variograms.</p>
                    <p>You can use established workflow tools to run the containers, as they contain all necessary metadata about needed inputs.</p>
                    <p>This flexible and reliable software environment lays the foundation for facilitating the development of new methods, that truely build on top of existing methods, which I will exemplify in the following section.</p>
                </aside>
            </MainSlide>
            
            <MainSlide title="" autoAnimate visibility="uncounted">
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

            <MainSlide title="Appendix: Mean shift" visibility="uncounted" id="mean-shift">
                <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                    <Box component="img" src="img/appendix_mean_shift.png" sx={{maxHeight: '450px'}} />
                </Paper>
            </MainSlide>

            <MainSlide title="Appendix: Mean shift" visibility="uncounted">
                <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                    <Box component="img" src="https://spin.atomicobject.com/wp-content/uploads/ms_2d_bw_.8.gif" sx={{maxHeight: '450px'}} />
                    <Typography variant="caption" component="div" sx={{textAlign: 'left', p: 1}}>
                        Image and animation <a href="https://spin.atomicobject.com/2015/05/26/mean-shift-clustering/" target="_blank" rel="noreferrer">linked from Atomic Object blog</a>
                    </Typography>
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

            <aside className="notes">
                <p>I explored an alternative approach to visualizing the correlation structure of a geostatistical dataset using force-directed graphs.</p>
                <p>I found this method particularly useful as it provides a different perspective compared to variograms.</p>
                <p>A force-directed graph is a mathematical graph where each node represents an observation location, and the algorithm adjusts the positions of the nodes to keep the links at a pre-defined length.</p>
                <p>To create the graph, I created links between observation locations that fell within the same lag class, with the link lengths set to the absolute value difference between them.</p>
                <p>Initially, with a small number of observations and links, the force-directed graph is relatively straightforward to build.</p>
                <p>However, as the number of observations increases, it becomes more challenging to find an exact configuration that respects all the settings.</p>
                <p>Here, you can see that the graph cannot represent the settings for the links exactly, which can be thought of as "friction" in a network of springs under tension.</p>
            </aside>
        </MainSlide>


        <section>
            <MainSlide title="Cluster mean covariance graph">
                <Paper elevation={3}>
                    <ClusterGraphs />
                </Paper>

                <aside className="notes">
                    <p>In this slide, I present the force-directed graphs for the yellow cluster of soil moisture measurements in the Colpach catchment.</p>
                    <p>What we can observe is that there are actually two separate, independent graphs when considering separating distances up to 500 meters.</p>
                    <p>However, when considering separating distances up to 1 kilometer, the two graphs become connected, particularly through three nodes in the middle. These nodes connect the other blobs but also keep them at some distance.</p>
                    <p>Furthermore, force-directed graphs were also generated for the green and blue clusters, and they exhibit similar structures with minor differences. A direct application of this graph is the identification of representative observation locations.</p>
                </aside>
            </MainSlide>

            <MainSlide title="Benchmark Graphs" visibility="uncounted">
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

                <aside className="notes">
                    <p>To explore the limits of force-directed graphs, I calculated benchmark random fields and created force-directed graphs for them.</p>
                    <p>The first benchmark random field used a completely random distance matrix, resulting in a force-directed graph with a random structure.</p>
                    <p>The second benchmark random field was a deterministic field where I added up the indices for the values, resulting in a force-directed graph that resembled the field itself.</p>
                    <p>The third benchmark random field was a highly ordered field where all the values were the same, leading to a configuration with a lot of tension.</p>
                    <p>Each benchmark field exhibited a distinct graph shape, providing clearer differences in their evolution for further analysis.</p>
                </aside>
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

                <aside className="notes">
                    <p>In this slide, you see the relative node velocity over time for the benchmark fields.</p>
                    <p>In the deterministic case with high variance, the nodes move at different speeds throughout the simulation.</p>
                    <p>In the case with no variance, there is initial movement, but the nodes gradually decay and converge into a stable state.</p>
                    <p>The random case quickly finds its configuration, with varying subsequent movement.</p>
                    <p>The cluster force-directed graphs show distinct emergence patterns, with each cluster exhibiting parts of the fingerprint of each benchmark field.</p>
                    <p>The evolution of the force-directed graphs for the three clusters also shows clear differences, although converging into the same state.</p>
                    <p>Formalizing the description of these differences is challenging and will be part of future work.</p>
                </aside>
            </MainSlide>
        </section>

        

        <MainSlide title="Summary">
            <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                <LI>- Experimental visualization of a datasets' correlation structure is possible</LI>
                {/* <LI className="fragment fade-up">- Graphs exhibit clear differences between benchmark fields</LI> */}
                <LI className="fragment fade-up">- Cluster graphs converge into a very similar state</LI>
                <LI className="fragment fade-up">- Hard to link the graphs back to variogram parameters</LI>
                <LI className="fragment fade-up">- Graph theory offers potential avenues for characterization of graph evolution and properties </LI>
            </Stack>

            <aside className="notes">
                <p>To summarize, with the software stack and reproducibility capabilities, it was possible to experimentally visualize correlation structures in a novel way.</p>
                {/* <p>The graphs exhibit distinct differences between benchmark fields, enabling the decoding of cluster differences.</p> */}
                <p>The cluster graphs converge into similar states, as expected since they represent the same dataset at different times.</p>
                <p>However, linking these findings back to the variogram parameters remains a challenge.</p>
                <p>Graph theory might be the way forward to systematically explore and describe the emergence of these graphs and describe their properties in a concise way. We already made the first steps into this direction, which might serve as a solid foundation for our upcoming discussion.
                </p>
            </aside>
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