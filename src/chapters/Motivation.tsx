import { Box, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"

import BasicVariogram from "../slides/BasicVariogram"
import LI from "../components/LI"
import SoftwareFlowchart from "../slides/SoftwareFlowchart"


const Motivation: React.FC = () => {
    return <>
        <MainSlide id="start-motivation">
            <Typography variant="h2" component="div">
                How can pancakes help us to build better geostatistical software?
            </Typography>
        </MainSlide>

        <MainSlide title="The original pancake">
            <Paper elevation={3} sx={{width: 'fit-content', p: 1, m: 'auto'}}>
                <Box component="img" src="img/first_pancake.png" sx={{height: 450}} />
            </Paper>
        </MainSlide>

        <MainSlide title="Building a pancake variogram">
            <Paper elevation={3} sx={{padding: 1, width: 'fit-content', m: 'auto'}} className="r-stack">
                <Box component="img" src="img/pancake_field_rgb.png" sx={{maxHeight: 500}} />
                <Box component="img" src="img/pancake_field_r.png" sx={{maxHeight: 500}} className="fragment" />
                <Box component="img" src="img/pancake_field_sample.png" sx={{maxHeight: 500}} className="fragment" />
                <Box component="img" src="img/pancake_animation.gif" sx={{maxHeight: 500}} className="fragment" />
                <Box component="img" src="img/lagclasses_animation.gif" sx={{maxHeight: 500}} className="fragment" />
            </Paper>
        </MainSlide>

        <MainSlide autoAnimate title="Intro to Variograms">
            <BasicVariogram />
        </MainSlide>

        <MainSlide title="Interpolate a pancake">
            <Paper elevation={3}>
                <Stack direction="row" spacing={3} sx={{pt: 2}}>
                    <Box>
                        <Typography variant="h6" component="div">Pancake on a grid</Typography>
                        <Box component="img" src="img/motivation_pancake_original.png" sx={{height: 450}} />
                    </Box>
                    <Box className="fragment">
                        <Typography variant="h6" component="div">Kriging interpolation</Typography>
                        <Box component="img" src="img/motivation_pancake_krige.png" sx={{height: 450}} />
                    </Box>
                </Stack>
            </Paper>
        </MainSlide>

        <section>
            
            <MainSlide title="Software Overview">
                <Box className="r-stack">
                    <Box className="fragment custom blur-out" data-fragment-index="2">
                        <SoftwareFlowchart />
                    </Box>
                    <Stack direction="column" spacing={3} sx={{p: 3}} className="info-box fragment zoom-in" data-fragment-index="2">
                        <LI>- open-source package actively developed since 2017</LI>
                        <LI>- integrates well with packages for scientific computing</LI>
                        <LI>- extensive documentation & Model description paper in GMD</LI>
                        <LI>- used in at least 4 different summer schools</LI>
                    </Stack>
                </Box>
                
            </MainSlide>

            <MainSlide title="Software Overview">
                <SoftwareFlowchart withCode />
            </MainSlide>
        </section>

        <Outline withFragments />
    </>
}

export default Motivation