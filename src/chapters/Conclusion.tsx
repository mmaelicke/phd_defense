import { Box, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import LI from "../components/LI"
import SoftwareFlowchart from "../slides/SoftwareFlowchart"

const Conclusion: React.FC = () => {
    return (<>

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

        {/* <MainSlide title="Software Overview">
            <SoftwareFlowchart />
        </MainSlide> */}
        
        <MainSlide title="Conclusion">
            <Stack direction="column" justifyContent="space-evenly" sx={{height: '100%'}}>
                <Box>
                <Typography variant="h6">Software package</Typography>
                <Box className="info-box" sx={{mt: 3, p: 3}}>
                    <LI>- <i>SciKit-GStat</i> is widly accepted and used in the community</LI>
                    <LI className="fragment" data-fragment-index="0">- Model description paper is cited, Github repository is used lectures, summer schools ... </LI>
                    <LI className="fragment" data-fragment-index="1">- This presentation itself is a live-demonstration of (good) research software</LI>
                </Box>
                </Box>
                <Box className="fragment fade-up" data-fragment-index="2">
                <Typography variant="h6">Uncertainty extension</Typography>
                <Box className="info-box" sx={{mt: 3, p: 3}}>
                    <LI className="">- Propagation of uncertainty allowed for multi-model approaches</LI>
                    <LI className="fragment" data-fragment-index="3">- Epistemic uncertainties in model selection persist irrespective of their repesentation</LI>
                </Box>
                </Box>
            </Stack>
            
            
        </MainSlide>

    </>)
}

export default Conclusion