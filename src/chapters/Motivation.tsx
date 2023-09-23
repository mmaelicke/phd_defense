import { Box, Paper, Stack, Typography } from "@mui/material"

import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"
import LI from "../components/LI"
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
                    <p>Let's consider a crucial variable like rainfall. The presented map is indicating the distance to the nearest rainfall ground station for each location on the Earth. The white areas signify distances of at least 100 kilometers. When we focus on Europe, especially in countries like Germany or the UK, the density increases, but we still observe distances of around 25 to 50 kilometers to the nearest rainfall station. Hence, we do not have an exhaustive dataset and may miss entire events by ground stations. Geostatistics provide means to model the spatial correation between observations and use that for example for interpolating maps.</p>
                    <p>Geostatistics has been around for several decades now, but as you can see in this graph, geostatistical methods are referenced in research articles ever since. The bars signify the number of peer-reviewed arcticles, that can be found by the keywords 'rainfall' and 'kriging' in the web of science database.</p>
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
                <p>Geostatistics is also relevant on smaller scales. On the map you can see the Attert catchment in Luxembourg, where, among others, soil moisture has been observed. We use data from the Colpach sub-catchment, which consists of approximately 60 different locations with soil moisture measurements at three different depths.</p>
                <p>Although being the smallest fraction of fresh water resouces, soil water content is a crucial key variable of environmental systems, as it represents the fraction available for plants. Beyond that, soil moisture plays a key role in the dynamics of floods and droughts, which is more relevant than ever.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Not sure yet">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Box component="img" src="img/motivation_colpach.png" sx={{maxHeight: 300}} />
                <Box component="img" src="img/motivation_kriging.gif" sx={{maxHeight: 300}} className="fragment" />
            </Paper>

            <aside className="notes">
                <p>Here, you can see the soil moisture observations from 30cm depth for the year 2015.</p>
                <p>For the sake of today's presentation, I ran the interpolation based on daily observations for the last couple of months of observation. The interpolated map can effectively help to visualize the spatial distribution of soil moisture. This interpolation represents one of the key applications of geostatistics.</p>
                <p>But if that works all so well, why do I care?</p>
            </aside>
        </MainSlide>


        <MainSlide title="Contributions" autoAnimate>
            <Typography data-id="claim" variant="h4" component="div">I have enhanced the robustness of variogram estimation</Typography>

            <aside className="notes">
            <p>When summarizing 7 years of my work into a single statement, my significant contribution is an enhancement of variogram estimation.</p>
            </aside>
        </MainSlide>
        <MainSlide title="Contributions" autoAnimate visibility="uncounted">
            <Typography data-id="claim" variant="h4" component="div" sx={{fontSize: '120%'}}>I have enhanced the robustness of variogram estimation</Typography>
            <Stack direction="row" spacing={3} justifyContent="space-around" sx={{mt: '5rem'}}>

                <Stack direction="column" sx={{textAlign: 'left'}}>
                    <Typography variant="h6" component="div" sx={{mb: 2}}>novel methods</Typography>
                    <Box className="fragment" data-fragment-index="1" sx={{mb: 3}}>
                        <p>Uncertainty estimation for empirical variograms</p>
                        <p>Multi-model interpretation of variograms</p>
                    </Box>
                    <Typography className="fragment pub-frame" data-fragment-index="3" variant="body1" component="div">
                        <strong>Mälicke, M.</strong>, Hassler, S. K., Blume, T., Weiler, M., & Zehe, E. <strong>(2020)</strong>. <i>Soil moisture: variable in space but redundant in time.</i> Hydrology and Earth System Sciences, 24(5), 2633-2653.
                    </Typography>
                </Stack>

                <Stack direction="column" sx={{textAlign: 'left'}}>
                    <Typography variant="h6" component="div" sx={{mb: 2}}>reliable software</Typography>
                    <Box className="fragment" data-fragment-index="2" sx={{mb: 3}}>
                        <p>Variogram library for Python</p>
                        <p>Docker-based reproducibility framework</p>
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
                <p>I did that by contributing from two different ends, by proposing novel methods and by developing reliable software.</p>
                <p>I propose methods to systematically propagate observation uncertainty into empirical variograms, as well as an investigate the implications.</p>
                <p>The outstanding software contribution is a variogram estimations toolsbox, which is especially helpful in combination with a software framework for reproducible applications.</p>
                <p>With the exception of the software framework, all work has been published in different peer-reviewed journals. Methods are published in HESS and spatial statistics, while the software is published in GMD.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Research Questions">
            <Paper elevation={3} sx={{p: 2}} className="r-stack">
                <Stack direction="column" spacing={3} sx={{p: 1}}>
                    <LI className="fragment">- By including observation uncertainties into variogram modeling, can we provide better insights into spatial datasets?</LI>
                    <LI className="fragment">- By implementing a minimal interface and minimal metadata requirements, can we replicate and extend (geostatistical) tools more easily?</LI>
                </Stack>
            </Paper>

            <aside className="notes">
                <p>I would like to underpin today's presentation with two core questions that represent these two pillars of my work:</p>
                <p>'By including observation uncertainties into variogram modeling, can we provide better insights into spatial datasets?' - With this, I mainly seek to enhance existing approaches and propose an exiting new method for variography to you.</p>
                <p>For the second part we want to explore research software reproducibility. 'By implementing a minimal interface and minimal metadata requirements, can we replicate and extend (geostatistical) tools more easily?'. I will demonstrate this at a rather uncommon example. I will share my thoghts on these questions along the following outline.</p>
            </aside>
        </MainSlide>

        <Outline withFragments withNotes />
    </>
}

export default Motivation