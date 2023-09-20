import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"

import BasicVariogram from "../slides/BasicVariogram"
import LI from "../components/LI"
import SoftwareFlowchart from "../slides/SoftwareFlowchart"
import { InlineMath } from "react-katex"
import NuggetSillExample from "../slides/NuggetSillExample"
import RainfallKriging from "../slides/RainfallKriging"


const Motivation: React.FC = () => {
    return <>
        <section>
            <MainSlide autoAnimate title="Observations are sparse" id="motivation">
                <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                    <Box className="fragment custom blur-out" data-fragment-index="1">
                        <Box component="img" src="img/kidd_fig1.jpg" sx={{maxHeight: 400}} />
                        <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                            Distance to the next professionally operated rain gauge, global coverage. Figure taken from <a href="https://journals.ametsoc.org/view/journals/bams/98/1/bams-d-14-00283.1.xml#:~:text=View%20Full%20Size-,Fig.%201.,-Map%20showing%20the" target="_blank" rel="noreferrer">Kidd et al. (2017)</a>.
                        </Typography>
                    </Box>
                    <Box className="fragment zoom-in" data-fragment-index="1">
                        <RainfallKriging />
                        <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                            <a href="webofscience.com" target="_blank" rel="noreferrer">Web of Science</a> queried for publications tagged with 'rainfall' and 'kriging' between 2000 and 2022. Date of access: 20.09.2023; <a href="https://www.webofscience.com/wos/woscc/summary/a9639f71-d8c5-45d8-b5cf-13e243468988-a531b566/relevance/1" target="_blank" rel="noreferrer">Exact query link.</a>
                        </Typography>
                    </Box>
                </Paper>
                
                <aside className="notes">
                    <p>Let's consider a crucial variable like rainfall. The presented map is indicating the distance to the nearest rainfall ground station for each location on the Earth. The white areas signify distances of at least 100 kilometers. When we focus on Europe, especially in countries like Germany or the UK, the density increases, but we still observe distances of around 25 to 50 kilometers to the nearest rainfall station. Hence, we do not have an exhaustive dataset and may miss entire events by ground stations. Geostatistics provide means to model the spatial correation between observations and for example interpolate maps among others.</p>
                    <p>Geostatistics has been around for several decades now, but as you can see in this graph, geostatistical methods are references in research articles ever since. The bars signify the number of peer-reviewed arcticles, that can be found by the keywords 'rainfall' and 'kriging' in the web of science database.</p>
                </aside>
            </MainSlide>

            <MainSlide title="Remote sensing may be imprecise" id="starzel" visibility="uncounted">
                <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                    <Stack direction="row" spacing={3} sx={{p: 1}} className="fragment custom blur-out" data-fragment-index="5">
                        <Box>
                            <Box component="img" src="img/starzel_radar.jpg" sx={{maxHeight: 400, maxWidth: 400}} />
                        </Box>
                        <Box>
                        <Box className="r-stack">
                            <Box component="img" src="img/starzel_plot_0.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="1" />
                            <Box component="img" src="img/starzel_plot_1.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="2" />
                            <Box component="img" src="img/starzel_plot_2.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="3" />
                            <Box component="img" src="img/starzel_plot_3.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="4" />
                        </Box>
                        <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                            &copy; OPAHC
                        </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="column" className="fragment zoom-in info-box" spacing={3} data-fragment-index="5">
                    <LI>- Point observations are precise, but may miss events</LI>
                    <LI>- Radar captures spatial correlation, but may be imprecise</LI>
                    <Box className="fragment" data-fragment-index="6">
                        <LI> =&gt; using both data sources at once</LI>
                        <LI> =&gt; <i>geostatistics</i> provide means for merging <strong>and</strong> analyzing this relationship</LI>
                    </Box>
                    </Stack>
                </Paper>

                <aside className="notes">
                    <p>You may suggest using rainfall radar instead. Indeed, rainfall patterns can be captured quite well in space using radar. Here's an example from the Starzel region in southwest Germany in 2008, where a severe flood occurred. You can also see that the storm of interest is shadowed by two other storms for both radar stations.</p>
                    <p>The blue line in the event hydrograph represents the actual flood, while the green line depicts the flood prediction based on radar imagery only.</p>
                    <p>As you can see, the predicted flood was a two-year event, but the actual flood turned out to be a 100-year event.</p>
                    <p>However, if we consider the ground observations in the area alone, we achieve better predictions, in this case.</p>
                    <p>To obtain an even more precise prediction, we can combine both the accuracy of ground observations and the spatial patterns captured by rainfall radar. By combining the strengths of both data sources, we can generate a more reliable prediction, represented by the red line in this case.</p>
                    <p>Point observations are usually precise but may miss events, while radar captures spatial correlations but can be imprecise. Using both data sources simultaneously allows us to harness the power of geostatistics for merging and analyzing this relationship.</p>
                </aside>
            </MainSlide>

            <MainSlide title="Radar data quality" id="radar-quality" visibility="uncounted">
                <Paper elevation={3} sx={{p: 1}}>
                    <Box component="img" src="img/radar_quality.png" sx={{height: 400}} />
                    <Typography variant="caption" component="div" sx={{textAlign: 'left'}}>
                        <a href="https://www.dwd.de/EN/research/weatherforecasting/met_applications/radar_data_applications/radar_data_quality_control_node.html" rel="noreferrer">Source: Deutscher Wetterdienst (DWD) Radar Data Quality Control</a>
                    </Typography>
                </Paper>
            </MainSlide>
        </section>

        <MainSlide title="Attert catchment in Luxembourg">
            <Paper elevation={3} sx={{p: 1, width: 'fit-content', margin: 'auto'}}>
                <Box component="img" src="img/Attert.png" sx={{maxHeight: '450px'}} />
                <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                    Figure changed after <a href="https://hess.copernicus.org/articles/23/3807/2019/#section3" target="_blank" rel="noreferrer">Loritz et al. (2019)</a>
                </Typography>
            </Paper>

            <aside className="notes">
                <p>Geostatistics is also relevant on smaller scales. On the map you can see the Attert catchment in Luxembourg, where, among others, soil moisture has been observed. We used data from the Colpach sub-catchment, which consists of approximately 60 different locations with soil moisture measurements at three different depths.</p>
                <p>Although being the smallest fraction of fresh water resouces, soil moisture is a crucial key variable of environmental systems, as it represents the fraction available for plants. Beyond that, soil moisture plays a key role in the dynamics of floods and droughts.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Not sure yet">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Box component="img" src="img/motivation_colpach.png" sx={{maxHeight: 300}} />
                <Box component="img" src="img/motivation_kriging.gif" sx={{maxHeight: 300}} className="fragment" />
            </Paper>

            <aside className="notes">
                <p>Here, you can see the soil moisture observations from 30cm depth for the year 2015.</p>
                <p>For the sake of today's presentation, I ran the interpolation based on daily observations. The interpolated map can effectively help to visualize the spatial distribution of soil moisture.</p>
            </aside>
        </MainSlide>


        <MainSlide title="Contributions" autoAnimate>
        <Typography data-id="claim" variant="h4" component="div">I made the estimation of the variogram more robust</Typography>
        </MainSlide>
        <MainSlide title="Contributions" autoAnimate visibility="uncounted">
            <Typography data-id="claim" variant="h4" component="div" sx={{fontSize: '120%'}}>I made the estimation of the variogram more robust</Typography>
            <Stack direction="row" spacing={3} justifyContent="space-around" sx={{mt: '5rem'}}>

                <Stack direction="column" sx={{textAlign: 'left'}}>
                    <Typography variant="h6" component="div" sx={{mb: 2}}>novel methods</Typography>
                    <Box className="fragment" data-fragment-index="1" sx={{mb: 3}}>
                        <p>Uncertainty estimation for empirical variograms</p>
                        <p>Multi-model interpretation of variograms</p>
                        {/* <p>Moving-window variograms</p>
                        <p>Clustering of variograms without information loss</p> */}
                    </Box>
                    <Typography className="fragment pub-frame" data-fragment-index="3" variant="body1" component="div">
                        <strong>Mälicke, M.</strong>, Hassler, S. K., Blume, T., Weiler, M., & Zehe, E. <strong>(2020)</strong>. <i>Soil moisture: variable in space but redundant in time.</i> Hydrology and Earth System Sciences, 24(5), 2633-2653.
                    </Typography>
                </Stack>

                <Stack direction="column" sx={{textAlign: 'left'}}>
                    <Typography variant="h6" component="div" sx={{mb: 2}}>reliable software</Typography>
                    <Box className="fragment" data-fragment-index="2" sx={{mb: 3}}>
                        <p>Variogram library for Python</p>
                        {/* <p>extensive documentation, plotting, tutorials</p> */}
                        <p>Docker-based software framework</p>
                    </Box>
                    <Typography className="fragment pub-frame" data-fragment-index="3" variant="body1" component="div">
                        <strong>Mälicke, M. (2022)</strong>. <i>SciKit-GStat 1.0: a SciPy-flavored geostatistical variogram estimation toolbox written in Python.</i> Geoscientific Model Development, 15(6), 2505-2532.
                    </Typography>
                </Stack>
            </Stack>

            <Typography className="fragment pub-frame" data-fragment-index="3" variant="body1" component="div" sx={{mt: 2}}>
                <strong>Mälicke, M.</strong>, Guadagnini, A., & Zehe, E. <strong>(2023)</strong>. <i>SciKit-GStat Uncertainty: A software extension to cope with uncertain geostatistical estimates.</i> Spatial Statistics, 54, 100737.
            </Typography>

            <aside className="notes">
                <p></p>
            </aside>
        </MainSlide>










        {/* <MainSlide title="Publications" visibility="uncounted">
            <Stack direction="column" spacing={4} className="fragment">
                <Typography variant="body1" component="div">
                    <strong>Mälicke, M.</strong>, Hassler, S. K., Blume, T., Weiler, M., & Zehe, E. <strong>(2020)</strong>. <i>Soil moisture: variable in space but redundant in time.</i> Hydrology and Earth System Sciences, 24(5), 2633-2653.
                </Typography>
                <Typography variant="body1" component="div">
                    <strong>Mälicke, M. (2022)</strong>. <i>SciKit-GStat 1.0: a SciPy-flavored geostatistical variogram estimation toolbox written in Python.</i> Geoscientific Model Development, 15(6), 2505-2532.
                </Typography>
                <Typography variant="body1" component="div">
                    <strong>Mälicke, M.</strong>, Guadagnini, A., & Zehe, E. <strong>(2023)</strong>. <i>SciKit-GStat Uncertainty: A software extension to cope with uncertain geostatistical estimates.</i> Spatial Statistics, 54, 100737.
                </Typography>
            </Stack>

            <aside className="notes">
                <p>The title of this work already implies a two-fold focus of my work: geostatistics and software development.</p>
                <p>This is also reflected by my three publications: Method development for analyzing soil moisture patterns in HESS, followed by a model description paper in GMD and finally an extension to that in Spatial Statistics, which involved both.</p>
            </aside>
        </MainSlide>

        <MainSlide title="My past 7 years" id="motivation" visibility="uncounted">
            <Stack  direction="row" spacing={1} justifyContent="space-around">
                <Stack direction="column" sx={{textAlign: 'left'}}>
                    <Typography variant="h5" component="div">2020 - Soil Moisture dynamics</Typography>
                    <p className="method">- Method: moving dispersion functions</p>
                    <p className="method fragment custom pale-out" data-fragment-index="1">- Cluster periods of similar spatial correlation</p>
                    <p className="method fragment custom pale-out" data-fragment-index="1">- Cluster without information loss</p>
                </Stack>
                <Stack direction="column" sx={{textAlign: 'left'}}>
                <Typography variant="h5" component="div">2022 - SciKit-GStat</Typography>
                    <p className="software "> - generic variography library</p>
                    <p className="software fragment custom pale-out" data-fragment-index="1"> - educational material &amp; apps</p>
                    <p className="software fragment custom pale-out" data-fragment-index="1">- extensive documentation, plotting, tutorials</p>
                    <p className="method fragment custom pale-out" data-fragment-index="1">- Method: novel binning approaches</p>
                    <p className="software fragment custom pale-out" data-fragment-index="1">- Ongoing development (&gt;7 years) &amp; user support</p>

                </Stack>
            </Stack>
            <Stack  direction="row" spacing={1} justifyContent="space-around" sx={{mt: 2}}>
                <Stack direction="column" sx={{textAlign: 'left'}}>
                <Typography variant="h5" component="div">2023 - SciKit-GStat Uncertainty</Typography>
                    <p className="software "> - extension to SciKit-GStat</p>
                    <p className="software fragment custom pale-out" data-fragment-index="1">sophisticated web-applications</p>
                    <p className="method">Uncertainty estimation for empirical variogram</p>
                    <p className="method">Multi-model interpretation of variograms</p>
                </Stack>
                <Stack direction="column" sx={{textAlign: 'left'}}>
                <Typography variant="h5" component="div">Unpublished</Typography>
                    <p className="software ">Docker-based software framework</p>
                    <p className="software fragment custom pale-out" data-fragment-index="1">Open specification + &gt; 6 client applications</p>
                    <p className="method">Method: Force-directed graphs for variograms</p>
                    <p className="method fragment custom pale-out" data-fragment-index="1">Benchmark force-directed graphs for interpretation</p>
                </Stack>
            </Stack>

            <aside className="notes">
                <p>My main contributions are listed here, organized by these publication. Methodological contributions are green and are all about variograms. Software contributions are purple and are mainly intended to replicate and develop methods more easily.</p>
                <p>Today I will only talk about these ones. In 2020 we published a method for moving-window variograms, for clustering the latter, and we could link them to information theory. This year was all focused on uncertainty in variograms and its implications, and recently I added a novel visualization for variograms.</p>
                <p>The software connecting all the dots is called SciKit-GStat and has always been developed further. But first, let me outline this mess here for this presentation.</p>
            </aside>
        </MainSlide> */}

        <MainSlide title="Research Questions" visibility="uncounted">
            <Paper elevation={3} sx={{p: 2}} className="r-stack">
                <Stack direction="column" spacing={3} sx={{p: 1}}>
                    <LI className="fragment">- By including observation uncertainties into variogram modeling, can we provide better insights into spatial datasets?</LI>
                    <LI className="fragment">- By implementing a minimal interface and minimal metadata requirements, can we replicate and extend (geostatistical) tools more easily?</LI>
                </Stack>
            </Paper>

            <aside className="notes">
                <p>I would like to underpin today's presentation with two core questions that represent the two pillars of my work:</p>
                <p>'By including observation uncertainties into variogram modeling, can we provide better insights into spatial datasets?' - With this, I mainly seek to enhance existing approaches and propose an exiting new method for variography to you.</p>
                <p>For the second part we want to explore research software reproducibility. 'By implementing a minimal interface and minimal metadata requirements, can we replicate and extend (geostatistical) tools more easily?'. I will demonstrate this at a rather uncommon example. I will share my thoghts on these questions along the following outline.</p>
            </aside>
        </MainSlide>

        <Outline withFragments withNotes />


        {/* <MainSlide>
            <Typography variant="h2" component="div">
                How can pancakes help us to build better geostatistical software?
            </Typography>

            <aside className="notes">
                <p>... we will explore how pancakes can help us improve geostatistical software.</p>
            </aside>
        </MainSlide> */}

        <MainSlide title="The original pancake">
            <Paper elevation={3} sx={{width: 'fit-content', p: 1, m: 'auto'}}>
                <Box component="img" src="img/first_pancake.png" sx={{height: 450}} />

                <aside className="notes">
                    <p>During my parental leave in 2018, while making pancakes for dinner, I noticed a spatial correlation structure in the browning of the pancake. I did what everyone of you would have done.</p>
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
        </section>

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
                <p>Returning to the pancakes, for illustration purposes, I fitted three variograms to the three different color channels and performed kriging interpolation for each channel.</p>
                <p>Here is how the combination looks like. Based on the 300 observed points, kriging effectively reproduces mid and large-scale variability on the pancake surface, with generally matching colors. However, it struggles to reproduce sharp edges, at least with the chosen model.</p>
                <p>This is how I utilized pancakes to develop geostatistical software.</p>
            </aside>
        </MainSlide>

        <section>
            
            <MainSlide title="Software Overview" id="software">
                <Box className="r-stack">
                    <Box className="fragments custom blur-out" data-fragment-index="2">
                        <SoftwareFlowchart />
                    </Box>
                    {/* <Stack direction="column" spacing={3} sx={{p: 3}} className="info-box fragment zoom-in" data-fragment-index="2">
                        <LI>- open-source package actively developed since 2017</LI>
                        <LI>- integrates well with packages for scientific computing</LI>
                        <LI>- extensive documentation & Model description paper in GMD</LI>
                        <LI>- used in at least 4 different summer schools</LI>
                    </Stack> */}

                    <aside className="notes">
                        <p>Now, let's discuss the software. The software is called SciKit-GStat, an open-source Python package widely recognized and accepted by the community. It integrates seamlessly with typical geostatistical and scientific packages in Python, such as NumPy, SciPy, and scikit-learn.</p>
                        <p>Additionally, I developed an extension dedicated to uncertainty within SciKit-GStat. I am aware of a number of third-party applications building on SciKit-GStat.</p>
                        <p>Finally, I created a suite of educational web applications called geostat apps, leveraging the capabilities of this software. We will delve into that in more detail later on.</p>
                        <p>To enhance interoperability, SciKit-GStat provides interfaces to GSTools, GStatSim, and SciKit-Learn, opening up broader possibilities for geostatistical analysis</p>
                    </aside>
                </Box>
                
            </MainSlide>

            <MainSlide title="Software Overview" visibility="uncounted">
                <SoftwareFlowchart withCode />
            </MainSlide>

            <MainSlide title="SciKit-GStat" visibility="uncounted" id="skgstat">
                    <Grid container>
                        
                        <Grid item xs={12} md={6} spacing={1}>
                            <Typography variant="h5"  sx={{textAlign: 'left', my: 2}}>Anisotropic variograms</Typography>
                            <Stack direction="column">
                                <LI>- Includes only point pairs within specified range of angles</LI>
                                <LI>- Can handle arbitrary number of different angles</LI>
                                <LI>- Only for 1D and 2D coordinates</LI>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={0} sx={{p: 1, width: 'fit-content', m: 'auto'}}>
                                <Box component="img" src="img/pancake_pair_field.png" sx={{height: '250px'}} />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5"  sx={{textAlign: 'left', my: 3}}>Spatio-temporal variograms</Typography>
                            <Stack direction="column">
                                <LI>- SciKit-GStat provides three spatio-temporal models</LI>
                                <LI>- Allows for irrelgular time-steps</LI>
                                <LI>- Cannot handle sparse time-axis (yet)</LI>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Paper elevation={0} sx={{p: 1, width: 'fit-content', m: 'auto'}}>
                                <Box component="img" src="img/st_3dplot.png" sx={{height: '250px'}} />
                            </Paper>
                        </Grid>

                    </Grid>
            </MainSlide>
        </section>

        <Outline withFragments withNotes />
    </>
}

export default Motivation