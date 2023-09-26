import { Box, Paper, Stack } from "@mui/material"
import { InlineMath } from "react-katex"

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
        <MainSlide title="Outline">
            <Outline highlight="uncertainty" />

            <aside className="notes">
                <p>Wit the next section, we will have a closer look on uncertainty in empirical variograms</p>
            </aside>
        </MainSlide>

        <MainSlide title="Propagate uncertainties">
            <Paper elevation={3} sx={{p: 1, width: 'fit-content', m: 'auto'}} className="r-stack">
                <Box component="img" src="img/motivation_variogram_step_0.png" sx={{height: 450}} />
                <Box component="img" src="img/motivation_variogram_step_1.png" sx={{height: 450}} className="fragment" />
                <Box component="img" src="img/motivation_variogram_step_2.png" sx={{height: 450}} className="fragment" />
            </Paper>

            <aside className="notes">
                <p>Our goal is to provide methods and tools to go from this empirical variogram...</p>
                <p>... to the one shown here. So, we want to propagate observation uncertainties into the empirical variogram. Instead of using error bars,</p>
                <p>I personally prefer representing uncertainty with an uncertainty bound. It's easy to imagine that there can be multiple parameterizations or even more than one variogram model that falls within the uncertainty bound.</p>
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
                    <p>To give you an idea of the uncertainties we're dealing with, I brought an image of the pancake, and here you see a resample with a random error of five units of intensity. You can see that you can’t see any difference. To better visualize how these uncertainties manifest, I introduced larger errors, as you can see here. For demonstration, I generated several of these re-samples to obtain an uncertainty band and fitted two distinct variogram models to the band.</p>
                    <p>In this visualization, you can see the two resulting kriging interpolations. One model exhibits a longer range and a smaller sill, while the other has a shorter range and a higher sill.</p>
                    <p>Remember, we are dealing with small observation differences, which accumulate and allowed for different model parameterizations, here exemplified in two distinct interpolations.</p>
                    <p>Therefore, it's crucial to propagate observation uncertainties into the variogram and represent them with an uncertainty band. This approach allows for fitting multiple models, each potentially exhibiting different structural properties and correlation lengths, which can be a significant challenge to address.</p>
                </aside>
            </MainSlide>

            <MainSlide title="RGB uncertainty bands" visibility="uncounted">
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
                    <p>For aleatory uncertainties that can be quantified, we provide a Monte Carlo simulation to resample the data and propagate the uncertainties into the variogram. Various semi-variances are simulated and represented by the red bars, and the confidence interval of their expected value is used as an uncertainty band. This approach is generally effective but can be time-consuming.</p>
                    <p>When observation uncertainties cannot be estimated, we offer two methods. The first method involves using the value differences of all points within one lag class, depicted by the red bars. The confidence interval of their mean is used as the uncertainty bound, depicted by the blue dashed lines. This approach assumes a certain sample size to be effective, as you can see, when increasing the number of point pairs.</p>
                    <p>The other option is to use K-fold bootstrap, where the each class is split into different folds, and the semi-variance is calculated by leaving out one fold at a time. This process is repeated multiple times, and the range or a quantile of the resulting semi-variance estimations is used as an uncertainty bound.</p>
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
                <p>Aleatory uncertainties are propagated using a Monte Carlo simulation,</p>
                <p>while epistemic uncertainties are handled either by the confidence interval of the lag class's mean or by bootstrapping a k-fold semi-variance.</p>
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
                <p>With these uncertainty propagation methods, we obtain an uncertainty bound, as shown in grey, for the pancake variogram again. Several models have already been fitted and are shown in green. Manual fitting now allows adjusting the sill and range to find a model that fits the uncertainty bound well.</p>
                <p>These uncertainty bounds allow for different parameterization and models.</p>
                <p>However, the challenge lies in assessing these models and determining the best one.</p>
            </aside>
        </MainSlide>

        <section>
            <MainSlide title="Uncertain Models" id="parallel">
                <Paper elevation={3} className="r-stack">
                    <Box className="fragment custom blur-in-out" data-fragment-index="1" sx={{width: '100%'}}>
                        <ParallelMetrics />
                    </Box>
                    <Box className="fragment fade-in" data-fragment-index="1">
                        <Box className="fragment fade-out" data-fragment-index="2">
                            <Stack direction="column" spacing={3} justifyContent="space-evenly" sx={{p: 3}} className="info-box">
                                <LI>- Assess models and parameterizations using different metrics</LI>
                                <LI variant="body1" sx={{pl: 5}}>- RMSE</LI>
                                <LI variant="body1" sx={{pl: 5}}>- Deviance Information Criterion (DIC)</LI>
                                <LI variant="body1" sx={{pl: 5}}>- Cross-Validation</LI>
                                <LI>- Rank models for each metric</LI>
                                <LI>- Calculate quartiles for ranks</LI>
                            </Stack>
                        </Box>
                    </Box>
                </Paper>
                <aside className="notes">
                    <p>We fitted around 30 models to the empirical variogram as show here and now need to assess them.</p>
                    <p>For this we use various metrics. The first metric is the root mean square error (RMSE) of the model to the uncertainty bound.</p>
                    <p>The second metric is the deviance information criterion (DIC), which assesses the likelihood of the model given the observed data, while also accounting for its complexity.</p>
                    <p>The third metric is a leave-one-out cross-validation, which examines how well the values can be reproduced using kriging.</p>
                    <p>The models were ranked from best to worst for each metric, and quartiles were calculated.</p>
                    <p>All this information is condensed into the graph presented. In the first column, the model types are color-coded. The other columns show the rankings per metric, with the best models at the top.</p>
                    <p>We can see that Gaussian models exhibit a diverse performance. In terms DIC they perform well, while in terms of RMSE, they vary widely. However, in cross-validation, Gaussian models perform worse. On the other hand, exponential models models show really poor fit but excel in cross-validation and DIC.</p>
                </aside>
            </MainSlide>

            <MainSlide title="Deviance information criterion" id="dic" visibility="uncounted">
                <Stack direction="column" sx={{height: '100%'}} justifyContent="space-evenly">
                        <Stack direction="column">
                            <InlineMath math="DIC(\Theta) = D(\bar\Theta) + 2p_D" />
                            <Box sx={{mt: 1}}></Box>
                        </Stack>
                        <Stack direction="column">
                            <InlineMath math="D(\bar\Theta) = -2 \ln L(\bar\Theta)" /> 
                        </Stack>
                        <Stack direction="column">
                            <InlineMath math="p_D = \overline{\left(\bar\Theta\right)} - D\left(\overline{\bar\Theta}\right)" />
                            <Box sx={{mt: 2}}><InlineMath  math="p_D = \frac{1}{2}\overline{var(D(\Theta)})" /></Box>
                        </Stack>
                        {/* <Stack></Stack>
                        <Stack>
                            <InlineMath math="AIC(\Theta) = -2 log L(\Theta) + 2k" />
                        </Stack> */}
                    </Stack>
            </MainSlide>
        </section>

        <MainSlide title="Summary">
            <Stack direction="column" spacing={3} className="info-box">
                <span />
                <LI>- Hard to decide on the <i>correct</i> model</LI>
                <LI className="fragment fade-up">- Thus, a number of equally probable are parameterized</LI>
                <LI className="fragment fade-up">- Exclude models (or parameterization) which are <strong>not</strong> suitable</LI>
                <span />
            </Stack>

            <aside className="notes">
                <p>This makes it challenging to determine the correct model, </p>
                <p>as we have multiple equally probable parametes or models (or both).</p>
                <p>However, we can exclude models that are not suitable and limit the parameter space based on these insights.</p>
            </aside>
        </MainSlide>
    </>)
}

export default Uncertainty