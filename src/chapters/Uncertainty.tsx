import { Box, Paper, Stack, Typography } from "@mui/material"

import MainSlide from "../components/MainSlide"
import BasicUncertainty from "../slides/BasicUncertainty"
import BasicUncertainModels from "../slides/BasicUncertainModels"
import Outline from "../slides/Outline"
import PropagationMethods from "../slides/PropagationMethods/PropagationMethods"
import ParallelMetrics from "../slides/ParallelMetrics"
import LI from "../components/LI"

const Uncertainty: React.FC = () => {
    return (<>
        <Outline highlight="uncertainty" />

        <MainSlide title="How to propagate uncertainties" id="start-uncertainty">
            <Stack direction="row" spacing={2}>
                <Box className="fragment zoom-in">
                    <Paper elevation={3} sx={{p: 1, width: 'fit-content'}} className="r-stack">
                        <Box component="img" src="img/motivation_variogram_step_0.png" sx={{heigth: 450}} />
                        <Box component="img" src="img/motivation_variogram_step_1.png" sx={{heigth: 450}} className="fragment" />
                    </Paper>
                </Box>
                <Stack direction="column" spacing={3} justifyContent="space-evenly" className="fragment">
                    <span />
                    <LI>- Observation uncertainties =&gt; errorbars on the y-axis</LI>
                    <LI>- Locations uncertainties =&gt;  errorbars on the x-axis</LI>
                    <LI className="fragment">- This work focuses only on y-axis errorbars</LI>
                    <span />
                </Stack>
            </Stack>
        </MainSlide>

        <MainSlide title="Uncertainty">
            <PropagationMethods />
        </MainSlide>

        <MainSlide title="Generalize uncertainty in geostatistics">
            <Stack direction="column" spacing={2}>
                <LI>- Aleatory uncertainties are propagated by Monte Carlo</LI>
                <LI>- Epistemic uncertainties:</LI>
                    <LI ></LI>
            </Stack>
        </MainSlide>
        
        <MainSlide title="Uncertainty">
            <Paper elevation={3} sx={{p: 2}}>
                <BasicUncertainty />
            </Paper>
        </MainSlide>

        <MainSlide title="Uncertain Models">
            <Paper elevation={3} sx={{p: 2}}>
                <BasicUncertainModels />
            </Paper>
        </MainSlide>

        <MainSlide title="Uncertain Models">
            <Paper elevation={3}>
                <ParallelMetrics />
            </Paper>
        </MainSlide>
    </>)
}

export default Uncertainty