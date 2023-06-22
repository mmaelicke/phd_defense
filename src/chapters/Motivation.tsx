import { Box, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"

import CompareObservationUncertainty from "../slides/CompareObservationUncertainty"
import BasicVariogram from "../slides/BasicVariogram"
import LI from "../components/LI"


const Motivation: React.FC = () => {
    return <>
        <MainSlide id="start-motivation">
            <Typography variant="h2" component="div">
                How can pancakes help us to build better geostatistical software?
            </Typography>
        </MainSlide>

        <MainSlide title="The original pancake">
            <Paper elevation={3} sx={{width: 'fit-content', p: 1}}>
                <Box component="img" src="img/first_pancake.png" sx={{height: 450}} />
            </Paper>
        </MainSlide>

        <MainSlide title="Building a pancake variogram">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Box component="img" src="img/pancake_field_rgb.png" sx={{maxHeight: 450}} />
                <Box component="img" src="img/pancake_field_r.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_field_sample.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_animation.gif" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/lagclasses_animation.gif" sx={{maxHeight: 450}} className="fragment" />
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

        <MainSlide title="Propagate uncertainties">
            <Paper elevation={3} sx={{p: 1, width: 'fit-content', m: 'auto'}} className="r-stack">
                <Box component="img" src="img/motivation_variogram_step_0.png" sx={{height: 450}} />
                <Box component="img" src="img/motivation_variogram_step_1.png" sx={{height: 450}} className="fragment" />
                <Box component="img" src="img/motivation_variogram_step_2.png" sx={{height: 450}} className="fragment" />
            </Paper>
        </MainSlide>

        <MainSlide title="Uncertain pancakes">
            <Paper elevation={3}>
                <CompareObservationUncertainty />
            </Paper>
        </MainSlide>

        <MainSlide title="Pancakes as datasets">
            <Stack direction="column" spacing={3} sx={{textAlign: 'left'}} className="info-box">
                <Stack direction="column" spacing={3} className="">
                    <LI>- Software stack can generalize to pancakes</LI>
                    <LI>- Pancake prooved to be suitable datasets</LI>
                    <LI>- Not bound to specificities of any location of the earth (uniqueness of location)</LI>
                </Stack>
                
                <Stack direction="column" spacing={3} className="fragment fade-up"> 
                    <LI>- Observation uncertainties should be propagated into the variogram</LI>
                    <LI>- Uncertainty bands allow for a multi-model approach</LI>
                    <LI>- Models can exhibit different structural properties</LI>
                </Stack>
            </Stack>
        </MainSlide>

        <Outline withFragments />
    </>
}

export default Motivation