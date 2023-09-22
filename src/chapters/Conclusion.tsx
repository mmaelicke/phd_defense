import { Box, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import LI from "../components/LI"
import Outline from "../slides/Outline"

const Conclusion: React.FC = () => {
    return (<>

        <Outline highlight="software" />

        <MainSlide title="Conclusions" autoAnimate>

            <Stack direction="column" spacing={0} justifyContent="space-around" sx={{height: 400}}>
                <Typography data-id="q1" variant="h5">By including observation uncertainties into variogram modeling, can we provide better insights into spatial datasets?</Typography>
                <Typography data-id="q2" variant="h5">By implementing a minimal interface and minimal metadata requirements, can we replicate and extend (geostatistical) tools more easily?</Typography>
            </Stack>


            <aside className="notes">
                <p>To conclude my presentation, I would like to come back to the two core questions I formulated earlier.</p>
            </aside>
        </MainSlide>
        
        <section>
            <MainSlide title="Conclusions" id="conclusion" autoAnimate visibility="uncounted">
                <Stack direction="column" justifyContent="space-evenly" sx={{height: '100%'}}>
                    <Box>
                        <Typography data-id="q1" variant="h5" sx={{fontSize: '90%'}}>By including observation uncertainties into variogram modeling, can we provide better insights into spatial datasets?</Typography>
                        <Box className="info-box" sx={{mt: 3, p: 3}}>
                            <LI className="fragment fade-up">- Epistemic uncertainties in model selection persist regardless of their repesentation</LI>
                            <LI className="fragment fade-up">- Propagation of uncertainty into the variogram allowed for multi-model approach</LI>
                        </Box>
                    </Box>
                    <Box>
                        <Typography data-id="q2" variant="h5" sx={{fontSize: '90%'}}>By implementing a minimal interface and minimal metadata requirements, can we replicate and extend (geostatistical) tools more easily?</Typography>
                        <Box className="info-box" sx={{mt: 3, p: 3}}>
                            <LI className="fragment fade-up">- A sophisticated research software (library) does not save you from spaghetti-code</LI>
                            <LI className="fragment fade-up">- Minimial overhead for scientists while enhancing reproducibility</LI>
                            <LI className="fragment fade-up">- Maintaining a software library constitutes a substantial portion of day-to-day work</LI>
                        </Box>
                    </Box>
                </Stack>

                <aside className="notes">
                    <p>In terms of uncertain variograms, I conclude that epistemic uncertainties arise from model selection. They will persist regardelss of their representation in the empirical variogram.</p>
                    <p>A possible way forward is a multi-model interpretation of emirical variograms and their application for example in kriging or simulations.</p>
                    <p>To conclude the second question about replicable tools, the first conclusion unfortunately is that a proper software library does not save you from the pitfalls of spaghetti-code</p>
                    <p>It is more of a prerequisite to effectively enhance reproducibility like demonstrated. The key feature from my point of view is to keep the overhead for the scientist as small as possible.</p>
                    <p>Finally, as a personal note I would like to conclude from the past 7 years, that maintaining a library like SciKit-GStat is a lot of work, that is not yet sufficiently values by a scientific working environment.</p>
                </aside>
            </MainSlide>

            <MainSlide title="Outlook" visibility="uncounted" >
                <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                    <LI>- Add force-directed graphs to the software and publish the results</LI>
                    <LI className="fragment fade-up">- Assess more graph theoretical metrics to grasp differences in the graphs</LI>
                    <LI className="fragment fade-up">- Clustering of variogram parameters: Mean shift?</LI>
                    <LI className="fragment fade-up" sx={{pl: 5}}>- difficult to define a distance in parameter space</LI>
                    <LI className="fragment fade-up" sx={{pl: 5}}>- hierachical clustering, terminated with respect to (observation) uncertainty</LI>
                </Stack>
            </MainSlide>
        </section>

        <MainSlide title="My past 7 years" id="motivation" visibility="uncounted">
            <Stack  direction="row" spacing={1} justifyContent="space-around" sx={{mt: 2}}>
                <Stack direction="column" sx={{textAlign: 'left'}}>
                    <Typography className="pub-frame" data-fragment-index="3" variant="body1" component="div">
                        <strong>Mälicke, M.</strong>, Hassler, S. K., Blume, T., Weiler, M., & Zehe, E. <strong>(2020)</strong>. <i>Soil moisture: variable in space but redundant in time.</i> Hydrology and Earth System Sciences, 24(5), 2633-2653.
                    </Typography>                   
                    <p className="method">- Method: moving dispersion functions</p>
                    <p className="method" data-fragment-index="1">- Cluster periods of similar spatial correlation</p>
                    <p className="method" data-fragment-index="1">- Cluster without information loss</p>
                </Stack>
                <Stack direction="column" sx={{textAlign: 'left'}}>
                    <Typography className="pub-frame" data-fragment-index="3" variant="body1" component="div">
                        <strong>Mälicke, M. (2022)</strong>. <i>SciKit-GStat 1.0: a SciPy-flavored geostatistical variogram estimation toolbox written in Python.</i> Geoscientific Model Development, 15(6), 2505-2532.
                    </Typography>
                    <p className="software "> - generic variography library</p>
                    <p className="software" data-fragment-index="1">- extensive documentation, plotting, tutorials</p>
                    <p className="method" data-fragment-index="1">- Method: novel binning approaches</p>
                    <p className="software" data-fragment-index="1">- Ongoing development (&gt;7 years) &amp; user support</p>

                </Stack>
            </Stack>
            <Stack  direction="row" spacing={1} justifyContent="space-around" sx={{mt: 2}}>
                <Stack direction="column" sx={{textAlign: 'left'}}>
                <Typography className="pub-frame" data-fragment-index="3" variant="body1" component="div" sx={{mt: 2, maxWidth: 450}}>
                    <strong>Mälicke, M.</strong>, Guadagnini, A., & Zehe, E. <strong>(2023)</strong>. <i>SciKit-GStat Uncertainty: A software extension to cope with uncertain geostatistical estimates.</i> Spatial Statistics, 54, 100737.
                </Typography>
                    <p className="software "> - extension to SciKit-GStat</p>
                    <p className="software" data-fragment-index="1">sophisticated web-applications</p>
                    <p className="method">- Uncertainty estimation for empirical variogram</p>
                    <p className="method">- Multi-model interpretation of variograms</p>
                </Stack>
                <Stack direction="column" sx={{textAlign: 'left'}}>
                <Typography variant="h5" component="div" sx={{mb: 5, mt: 2}}>Unpublished</Typography>
                    <p className="software ">- Docker-based software framework</p>
                    <p className="software" data-fragment-index="1">- Open specification + &gt; 6 client applications</p>
                    <p className="method">- Method: Force-directed graphs for variograms</p>
                    <p className="method" data-fragment-index="1">- Benchmark force-directed graphs for interpretation</p>
                </Stack>
            </Stack>
        </MainSlide>


        {/* <MainSlide title="Conclusion" id="start-conclusion" autoAnimate>
            <Typography variant="h4">How can pancakes help us to build better geostatistical software?</Typography>

            <aside className="notes">
                <p>Let's come back to the initial question of this presentation.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Pancake Dataset" autoAnimate>
            <Typography variant="h4" sx={{fontSize: '120%'}}>How can pancakes help us to build better geostatistical software?</Typography>
            <Box className="info-box" sx={{mt: 5, p: 3}}>
                <LI>- Prime example of geostatistical development dataset that is not artificially created.</LI>
                <LI>- Greatly facilitated the development of research software in variography</LI>
                <LI>- Methods can be universally tested, irrespective of individual data dependencies</LI>
            </Box>

            <aside className="notes">
                <p>In terms of the contribution of pancake datasets, they serve as valuable geostatistical development datasets that are not artificially created.</p>
                <p>They helped me to translate very specific Python scripts into a generic, robust, and tested software.</p>
                <p>I could test methods on different samples, without the need to consider catchment-specific details, as usually done using environmental datasets, especially in reviews.</p>
            </aside>
        </MainSlide> */}

    </>)
}

export default Conclusion