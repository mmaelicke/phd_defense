import { Box, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import LI from "../components/LI"
import Outline from "../slides/Outline"

const Conclusion: React.FC = () => {
    return (<>

        <Outline highlight="software" />

        
        <section>
        <MainSlide title="Conclusion">
            <Stack direction="column" justifyContent="space-evenly" sx={{height: '100%'}}>
                <Box>
                <Typography variant="h6">Software package</Typography>
                <Box className="info-box" sx={{mt: 3, p: 3}}>
                    <LI>- <i>SciKit-GStat</i> is widly accepted and used in the community</LI>
                    <LI className="fragment" >- Model description paper is cited, Github repository is used in lectures, summer schools ... </LI>
                    <LI className="fragment" >- This presentation itself is a live-demonstration of (good) research software</LI>
                </Box>
                </Box>
                <Box className="fragment fade-up">
                <Typography variant="h6">Uncertainty extension</Typography>
                <Box className="info-box" sx={{mt: 3, p: 3}}>
                    <LI className="">- Propagation of uncertainty into the variogram allowed for multi-model approach</LI>
                    <LI className="fragment">- Epistemic uncertainties in model selection persist regardless of their repesentation</LI>
                </Box>
                </Box>
            </Stack>

            <aside className="notes">
                <p>The software package SciKit-GStat has gained wide acceptance and usage within the community.</p>
                <p> It has a model description paper in GMD (Geoscientific Model Development) and is cited extensively. The Github repository is utilized by other packages and regularly used in summer schools.</p>
                <p>Additionally, the presentation itself serves as a live demonstration of the research software.</p>
                <p>Finally, coming back to the uncertainty extension. Propagating uncertainties into empirical variograms allowed for a multi-model approach.</p>
                <p>Epistemic uncertainties arising from model selection will persist regardless of their visualization. Not visualizing uncertainties does not eliminate their presence.</p>
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