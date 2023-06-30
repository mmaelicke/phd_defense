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

            <aside className="notes">
                <p>This is the empirical variogram I showed you earlier, and our goal is to provide methods and tools to go from this empirical variogram to the one shown here. So, we want to propagate observation uncertainties into the empirical variogram. Instead of using error bars, I personally prefer representing uncertainty with an uncertainty bound. It's easy to imagine that there can be multiple parameterizations or even the possibility of fitting two different models to the uncertainty bound.</p>
            </aside>
        </MainSlide>

        <section>
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

                <aside className="notes">
                    <p>To give you an idea of the uncertainties we're dealing with, here you see the original pancake, and here you see a resample with a random error of five units of intensity. You can see that you can’t see any difference. To better understand how these uncertainties manifest, I introduced larger error margins, as you can see here. I performed the entire procedure, propagated the uncertainties into the pancake, and fitted several models.</p>
                    <p>In this visualization, you can see two kriging interpolations that are quite distinct. One model exhibits a longer range and a smaller sill, while the other has a shorter range and a higher sill.</p>
                    <p>Remember, we are dealing with small observation differences, which accumulate and lead to different model parameterization. Therefore, it's crucial to propagate observation uncertainties into the variogram and represent them with an uncertainty band. This approach allows for fitting multiple models, each potentially exhibiting different structural properties and correlation lengths, which can be a significant challenge to address.</p>
                </aside>
            </MainSlide>

            <MainSlide title="RGB uncertainty bands">
                <Paper elevation={3}>
                    <Box component="img" src="img/pancake_band_variograms.png" sx={{maxHeight: 450, maxWidth: '100%',  width: 'auto', height: 'auto'}} />
                </Paper>
            </MainSlide>
        </section>

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

                <aside className="notes">
                    <p>The uncertainty extension of SciKit-GStat offers three main methods for uncertainty propagation: two for handling epistemic uncertainties and one for handling aleatory uncertainties.</p>
                    <p>For aleatory uncertainties that can be quantified, we provide a Monte Carlo simulation to resample the data and propagate the uncertainties into the method. Various semi-variances are simulated, and either the confidence interval of their mean or their range can be used as an uncertainty band. This approach is generally effective but can be time-consuming.</p>
                    <p>When observation uncertainties cannot be estimated, we offer two methods. The first method involves using the value differences of all points within one lag class and using the confidence interval of their mean as the uncertainty bound for the semi-variance. This approach assumes a certain sample size to be effective.</p>
                    <p>The second option is to use K-fold bootstrap, where the lag class is split into different folds, and the semi-variance is calculated by leaving out one fold at a time. This process is repeated multiple times, and the means of the semi-variance estimations can be used to create a confidence interval or uncertainty bound.</p>
                </aside>
            </MainSlide>

            <MainSlide title="Uncertainty bounds of a pancake" visibility="uncounted">
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

            <aside className="notes">
                <p>Aleatory uncertainties are propagated using a Monte Carlo simulation, while epistemic uncertainties are handled either by the confidence interval of the lag class's mean or by bootstrapping a k-fold semi-variance.</p>
            </aside>
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

            <aside className="notes">
                <p>With these uncertainty propagation methods, we obtain an uncertainty bound, as shown in grey. Several models have been fitted and are shown in green. Manual fitting allows adjusting the sill and range to find a model that fits the uncertainty bound well. These uncertainty bounds allow for different parameterization and models.</p>
                <p>However, the challenge lies in assessing these models and determining the best one.</p>
            </aside>
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

            <aside className="notes">
                <p>To assess the models, I fitted around 30 models to the empirical variogram. We evaluated the models and parameterizations using various metrics.</p>
                <p>The first metric is the root mean square error (RMSE) of the model to the uncertainty bound.</p>
                <p>The second metric is the deviance information criterion (DIC), similar to the AIC, which assesses how well the model fits the observed data.</p>
                <p>The third metric is leave-one-out cross-validation, which examines how well the values can be reproduced using kriging.</p>
                <p>The models were ranked from best to worst for each metric, and percentiles were calculated, such as the top 10% and the worst 10%.</p>
                <p>All this information is condensed into the graph presented. In the first column, the model types are color-coded, with greens representing spherical models and reds representing Gaussian models. The graph displays the rankings for each metric, with the best models at the top.</p>
                <p>We can observe that Gaussian models exhibit a diverse performance. In terms of RMSE, they vary widely, while in terms of DIC, they perform well. However, in cross-validation, Gaussian models perform worse. On the other hand, spherical models show poor fit and DIC performance but excel in cross-validation.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Summary">
            <Stack direction="column" spacing={3} className="info-box">
                <span />
                <LI>- Hard to decide on the <i>correct</i> model</LI>
                <LI className="fragment fade-up">- Thus, a number of equally probable are parameterized</LI>
                <LI className="fragment fade-up">- Exclude models (or parameterization) which are <strong>not</strong> suitable</LI>
                <span />
            </Stack>

            <aside className="notes">
                <p>This makes it challenging to determine the correct model, as we have multiple equally probable parameterized models. However, we can exclude models that are not suitable based on these insights.</p>
            </aside>
        </MainSlide>
    </>)
}

export default Uncertainty