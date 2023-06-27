import { Box, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import LI from "../components/LI"
import Outline from "../slides/Outline"

const Conclusion: React.FC = () => {
    return (<>

        <Outline highlight="software" />

        <MainSlide title="Conclusion" id="start-conclusion" autoAnimate>
            <Typography variant="h4">How can pancakes help us to build better geostatistical software?</Typography>
            {/* <h4>How can pancakes help us to build better geostatistical software?</h4> */}
        </MainSlide>

        <MainSlide title="Pancake Dataset" autoAnimate>
            <Typography variant="h4" sx={{fontSize: '120%'}}>How can pancakes help us to build better geostatistical software?</Typography>
            <Box className="info-box" sx={{mt: 5, p: 3}}>
                <LI>- Prime example of geostatistical development dataset that is not artificially created.</LI>
                <LI>- Greatly facilitated the development of research software in variography</LI>
                <LI>- Methods can be universally tested, irrespective of individual data dependencies</LI>
                {/* <LI>-key advancement lies in the incorporation of observation uncertainties into the empirical variogram</LI>
                <LI>-(Experimental) expansion to force-directed graphs only due to robust software</LI> */}
            </Box>
        </MainSlide>
        
        <MainSlide title="Conclusion">
            <Stack direction="column" justifyContent="space-evenly" sx={{height: '100%'}}>
                <Box>
                <Typography variant="h6">Software package</Typography>
                <Box className="info-box" sx={{mt: 3, p: 3}}>
                    <LI>- <i>SciKit-GStat</i> is widly accepted and used in the community</LI>
                    <LI className="fragment" >- Model description paper is cited, Github repository is used lectures, summer schools ... </LI>
                    <LI className="fragment" >- This presentation itself is a live-demonstration of (good) research software</LI>
                </Box>
                </Box>
                <Box className="fragment fade-up">
                <Typography variant="h6">Uncertainty extension</Typography>
                <Box className="info-box" sx={{mt: 3, p: 3}}>
                    <LI className="">- Propagation of uncertainty allowed for multi-model approaches</LI>
                    <LI className="fragment">- Epistemic uncertainties in model selection persist irrespective of their repesentation</LI>
                </Box>
                </Box>
            </Stack>
        </MainSlide>

        <MainSlide title="Outlook">
            <Stack direction="column" justifyContent="space-evenly" spacing={3} sx={{p: 3}} className="info-box">
                <LI>- Add force-directed graphs to the software and publish the results</LI>
                <LI className="fragment fade-up">- Assess more graph theoretical metrics to grasp differences in the graphs</LI>
                <LI className="fragment fade-up">- Clustering of variogram parameters: Mean shift?</LI>
                <LI className="fragment fade-up" sx={{pl: 5}}>- difficult to define a distance in parameter space</LI>
                <LI className="fragment fade-up" sx={{pl: 5}}>- hierachical clustering, terminated with respect to (observation) uncertainty</LI>
            </Stack>
        </MainSlide>

            
            
        

    </>)
}

export default Conclusion