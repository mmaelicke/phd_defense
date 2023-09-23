import React from "react"
import { Box, Paper, Stack, Typography } from "@mui/material"
import { InlineMath } from "react-katex"

import MainSlide from "../components/MainSlide"
import NuggetSillExample from "../slides/NuggetSillExample"
import BasicVariogram from "../slides/BasicVariogram"


const Introduction: React.FC = () => {
    return (<>
        <MainSlide title="The original pancake">
            <Paper elevation={3} sx={{width: 'fit-content', p: 1, m: 'auto'}}>
                <Box component="img" src="img/first_pancake.png" sx={{height: 450}} />

                <aside className="notes">
                    <p>Geostatistics are generic and can not only be applied to hydrological datasets. During my parental leave in 2018, while making pancakes for dinner, I noticed a spatial correlation structure in the browning of the pancake. I did what everyone of you would have done.</p>
                </aside>
            </Paper>
        </MainSlide>

        <MainSlide title="Building a pancake variogram">
            <Paper elevation={3} sx={{padding: 1, width: 'fit-content', m: 'auto'}} className="r-stack">
                <Box component="img" src="img/pancake_field_rgb.png" sx={{height: 450}} />
                <Box component="img" src="img/pancake_field_r.png" sx={{height: 450}} className="fragment" />
                <Box component="img" src="img/pancake_field_sample.png" sx={{height: 450}} className="fragment" />
                <Box component="img" src="img/pancake_animation.gif" sx={{height: 450}} className="fragment" />
                <Box component="img" src="img/lagclasses_animation.gif" sx={{height: 450}} className="fragment" />
            </Paper>

            <aside className="notes">
                <p>I cropped and smoothed the pancake image and placed it on a Cartesian coordinate system.</p>
                <p>Next, I extracted the red channel.</p>
                <p>And started sampling the pancake surface, by calculating the intensity difference at two random locations.</p>
                <p>Repeat this procedure for more locations and all combinations, and you end up with a point cloud, depicting the separating distance on the x-axis and the absolute value difference on the y-axis.</p>
                <p>To describe the correlation between distance and absolute value difference, 25 evenly spaced lag classes are formed. Within each class, a metric of variability known as semi variance is calculated.</p>
            </aside>
        </MainSlide>

        <section>
            <MainSlide autoAnimate title="Intro to Variograms" id="variogram">
                <BasicVariogram />

                <aside className="notes">
                    <p>We call this an empirical variogram, representing the relationship between separating distance (X-axis) and semi-variance (Y-axis). To describe it more coherently, we apply a formal mathematical model to it.</p>
                    <p>The software I'm about to present includes eight different models, three of which are implemented here. For example, fitting a Gaussian model doesn't seem to provide a good fit, while an exponential model appears more suitable.</p>
                    <p>The model is described by at least two parameters, shown here. The upper horizontal line represents the sill, indicating the maximum sample variability of the observations, while the effective range on the X-axis denotes where the model reaches 95% of this value.</p>
                    <p>Now, discussing uncertainty, one crucial source arises from the fact that any geostatistical method we apply only uses the model, not the empirical variogram. Any uncertainty and errors introduced during model fitting will propagate into subsequent methods.</p>
                </aside>
            </MainSlide>

            <MainSlide title="Variogram models" id="models" visibility="uncounted">
                <Stack direction="column" sx={{height: '100%'}} justifyContent="space-evenly">
                    <Stack direction="column">
                        <InlineMath math="\gamma(h) = 
                            \begin{cases}
                                b + C_0 \left(\frac{3}{2}\frac{h}{a} - \frac{1}{2}\left(\frac{h}{a}\right)^3\right) & \text{if } h \leq a \\
                                b + C_0 & \text{if } h > a
                            \end{cases}" 
                        />
                        <Box sx={{mt: 1}}><InlineMath math="a = \frac{r}{1}" /></Box>
                    </Stack>
                    <Stack direction="column">
                        <InlineMath math="\gamma(h) = b + C_0 \left(1 - e^{-\frac{h}{a}}\right)" />
                        <Box sx={{mt: 1}}><InlineMath math="a = \frac{r}{3}" /></Box>
                    </Stack>
                    <Stack direction="column">
                        <InlineMath math="\gamma(h) = b + C_0 \left(1 - e^{-\frac{h^2}{a^2}}\right)" />
                        <Box sx={{mt: 1}}><InlineMath math="a = \frac{r}{2}" /></Box>
                    </Stack>
                </Stack>
            </MainSlide>

            <MainSlide title="Variogram models" id="models-2" visibility="uncounted">
                <Stack direction="column" sx={{height: '100%'}} justifyContent="space-evenly">
                    <Stack direction="column">
                        <InlineMath math="\gamma(h) = b + C_0 \left[7\frac{h^2}{a^2} - \frac{35}{4}\frac{h^3}{a^3} + \frac{7}{2}\frac{h^5}{a^5} - \frac{3}{4}\frac{h^7}{a^7} \right]" 
                        />
                        <Box sx={{mt: 1}}><InlineMath math="a = \frac{r}{1}" /></Box>
                    </Stack>
                    <Stack direction="column">
                        <InlineMath math="\gamma(h) = b + C_0 \left(1 - e^{-(\frac{h}{a})^s}\right)" />
                        <Box sx={{mt: 1}}><InlineMath math="a = \frac{r}{3^\frac{1}{s}}" /></Box>
                    </Stack>
                    <Stack direction="column">
                        <InlineMath math="\gamma(h) = b + C_0 \left( 1 - \frac{1}{2^{\nu - 1} \Gamma(\nu)} \left(\frac{h}{a}\right)^{\nu} \Kappa_{\nu}\left(\frac{h}{a}\right)  \right)" />
                        <Box sx={{mt: 1}}><InlineMath math="a = \frac{r}{2}" /></Box>
                    </Stack>
                </Stack>
            </MainSlide>

            <MainSlide title="Nugget / Sill ratio" id="nugget" visibility="uncounted">
                <Paper elevation={3} sx={{width: 'fit-content', m: 'auto'}}>
                    <NuggetSillExample />
                </Paper>
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

                <aside className="notes">
                    <p>For illustration purposes, I repeated this procedure for each channel.</p>
                    <p>Here is how the combination looks like. Based on the 300 observed points, kriging effectively reproduces mid and large-scale variability on the pancake surface, with generally matching colors.</p>
                </aside>
            </MainSlide>
        </section>

        {/* <MainSlide title="Learning with pancakes">
            <Stack direction="row">
                <Paper elevation={3} sx={{width: 'fit-content', p: 0}}>
                    <Box component="img" src="img/pancake_field_sample.png" sx={{height: 400, width: 450, objectFit: 'cover', objectPosition: '0 0'}} />
                </Paper>
                <Stack direction="column" justifyContent="space-evenly">
                    <Typography variant="h3" component="div" className="fragment fade-left">
                        Why can't we use the full pancake?
                    </Typography>
                </Stack>
            </Stack>

            <aside className="notes">
                <p>Now, when I presented the pancake dataset, you might have wondered:</p>
                <p>Why can’t we just use the full pancake and calculate the variogram on all pixels, as we have these observations as well. For the pancake, you could actually do that, but..</p>
            </aside>
        </MainSlide> */}
    </>)
}

export default Introduction