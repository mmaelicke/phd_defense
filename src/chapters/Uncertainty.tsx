import { Box, Paper, Stack } from "@mui/material"

import MainSlide from "../components/MainSlide"
import BasicUncertainty from "../slides/BasicUncertainty"
import BasicUncertainModels from "../slides/BasicUncertainModels"
import Outline from "../slides/Outline"
import PropagationMethods from "../slides/PropagationMethods/PropagationMethods"
import ParallelMetrics from "../slides/ParallelMetrics"
import LI from "../components/LI"
import CompareObservationUncertainty from "../slides/CompareObservationUncertainty"

const Uncertainty: React.FC = () => {
    return (<>

        <Outline highlight="uncertainty" />

        <MainSlide title="Propagate uncertainties">
            <Paper elevation={3} sx={{p: 1, width: 'fit-content', m: 'auto'}} className="r-stack">
                <Box component="img" src="img/motivation_variogram_step_0.png" sx={{height: 450}} />
                <Box component="img" src="img/motivation_variogram_step_1.png" sx={{height: 450}} className="fragment" />
                <Box component="img" src="img/motivation_variogram_step_2.png" sx={{height: 450}} className="fragment" />
            </Paper>
        </MainSlide>

        <MainSlide title="Uncertain pancakes">
            <Paper elevation={3} className="r-stack">
                <Box className="fragment custom blur-out" data-fragment-index="2">
                    <CompareObservationUncertainty />
                </Box>
                <Stack direction="column" spacing={3} className="info-box fragment zoom-in" data-fragment-index="2">
                    <LI>- Observation uncertainties should be propagated into the variogram</LI>
                    <LI>- Uncertainty bands allow for a multi-model approach</LI>
                    <LI>- Models can exhibit different structural properties</LI>
                </Stack>
            </Paper>
        </MainSlide>

        {/* <MainSlide title="How to propagate uncertainties" id="start-uncertainty">
            <Stack direction="row" spacing={2}>
                <Box className="fragment zoom-in">
                    <Paper elevation={3} sx={{p: 1, width: 'fit-content'}} className="r-stack">
                        <Box component="img" src="img/motivation_variogram_step_0.png" sx={{heigth: 450}} />
                        <Box component="img" src="img/motivation_variogram_step_1.png" sx={{heigth: 450}} className="fragment" />
                    </Paper>
                </Box>
                <Stack direction="column" spacing={3} justifyContent="space-evenly" className="fragment">
                    <span />
                    <LI>- Uncertain observation =&gt; <strong>y-</strong>errorbars </LI>
                    <LI>- Uncertain location =&gt;  <strong>x-</strong>errorbars</LI>
                    <LI className="fragment">- This work focuses only on y-axis errorbars</LI>
                    <span />
                </Stack>
            </Stack>
        </MainSlide> */}

        <section>
            <MainSlide title="Uncertainty propagation methods">
                <PropagationMethods />
            </MainSlide>

            <MainSlide title="Uncertainty bounds of a pancake">
                <Paper elevation={3} sx={{p: 2}} className="r-stack">
                    <Box className="fragment custom blur-out" data-fragment-index="1">
                        <BasicUncertainty />
                    </Box>
                    <Box className="fragment zoom-in" data-fragment-index="1" >
                        <Stack direction="column" spacing={3} alignContent="space-evenly" sx={{p: 3}} className="info-box">
                            <LI>- Observation uncertainty allows for definition of uncertainty bounds</LI>
                            <LI className="fragment">- Choice of method for estimation is epistemic in nature</LI>
                            <LI className="fragment">- The subsequent propagation does not account for these uncertainties</LI>
                        </Stack>
                    </Box>
                </Paper>
            </MainSlide>
            
        </section>

        <MainSlide title="Generalize uncertainty in geostatistics">
            <Stack direction="column" spacing={3} className="info-box">
                <span />
                <LI>- Aleatory uncertainties are propagated by a Monte Carlo simulation</LI>
                
                <Box className="fragment">
                <LI>- Epistemic uncertainties:</LI>
                    <LI sx={{pl: 5}}>- confidence interval of the lag class's mean</LI>
                    <LI sx={{pl: 5}}>- bootstraping a k-fold semi-variance</LI>
                </Box>
                <span />
            </Stack>
        </MainSlide>

        <MainSlide title="Uncertain model parameterization">
            <Paper elevation={3} sx={{p: 2}} className="r-stack">
                <Box className="fragment custom blur-out" data-fragment-index="1">
                    <BasicUncertainModels />
                </Box>
                <Box className="fragment zoom-in" data-fragment-index="1">
                    <Stack direction="column" spacing={3} justifyContent="space-evenly" sx={{p: 3}} className="info-box">
                        <LI>- Uncertainty bounds allow for multiple parameterizations and models</LI>
                        {/* <LI>- Parameter interactions </LI> */}
                        <LI className="fragment fade-up">- How to assess models (and parameters)?</LI>
                    </Stack>
                </Box>
            </Paper>
        </MainSlide>

        <MainSlide title="Uncertain Models">
            <Paper elevation={3} className="r-stack">
                <Box className="fragment custom blur-in-out" data-fragment-index="1" sx={{width: '100%'}}>
                    <ParallelMetrics />
                </Box>
                <Box className="fragment fade-in" data-fragment-index="1">
                    <Box className="fragment fade-out" data-fragment-index="2">
                        <Stack direction="column" spacing={3} justifyContent="space-evenly" sx={{p: 3}} className="info-box">
                            <LI>- Assess models and parameterizations using different metrics</LI>
                            <LI variant="body1" sx={{pl: 5}}>- RMSE</LI>
                            <LI variant="body1" sx={{pl: 5}}>- Deviance information criterion (DIC)</LI>
                            <LI variant="body1" sx={{pl: 5}}>- cross-validation</LI>
                            <LI>- Rank models for each metric</LI>
                            <LI>- Calucluate percentiles for ranks</LI>
                        </Stack>
                    </Box>
                </Box>
            </Paper>
        </MainSlide>

        <MainSlide title="Summary">
            <Stack direction="column" spacing={3} className="info-box">
                <span />
                <LI>- Hard to decide on the <i>correct</i> model</LI>
                <LI className="fragment fade-up">- Thus, a number of equally probable are parameterized</LI>
                <LI className="fragment fade-up">- Exclude models (or parameterization) which are <strong>not</strong> suitable</LI>
                <span />
            </Stack>
        </MainSlide>
    </>)
}

export default Uncertainty