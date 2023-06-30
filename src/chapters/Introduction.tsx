import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import React from "react"
import LI from "../components/LI"


const Introduction: React.FC = () => {
    return (<>
        <MainSlide title="Learning with pancakes">
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
                <p>Why can’t we just use the full pancake and calculate the variogram on all pixels, as we have these observations as well.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Observations are sparse">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Box className="fragment-disabled custom blur-out" data-fragment-index="1">
                    <Box component="img" src="img/kidd_fig1.jpg" sx={{maxHeight: 400}} />
                    <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                        Distance to the next professionally operated rain gauge, global coverage. Figure taken from <a href="https://journals.ametsoc.org/view/journals/bams/98/1/bams-d-14-00283.1.xml#:~:text=View%20Full%20Size-,Fig.%201.,-Map%20showing%20the" target="_blank" rel="noreferrer">Kidd et al. (2017)</a>.
                    </Typography>
                </Box>
                {/* <Stack direction="column" className="fragment zoom-in info-box" spacing={3} data-fragment-index="1">
                    <LI>- Precise <i>point</i> observations</LI>
                    <LI>- but spatially sparse</LI>
                </Stack> */}
            </Paper>
            
            <aside className="notes">
                <p>Let's consider other variables like rainfall. The map is indicating the distance to the nearest rainfall ground station for each location on the Earth. The white areas signify distances of at least 100 kilometers. When we focus on Europe, especially in countries like Germany or the UK, the density increases, but we still observe distances of around 25 to 50 kilometers to the nearest rainfall station. Hence, our rainfall pancake has some gaps.</p>
            </aside>
        </MainSlide>

        <MainSlide title="Remote sensing may be imprecise" id="starzel">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Stack direction="row" spacing={3} sx={{p: 1}} className="fragment custom blur-out" data-fragment-index="5">
                    <Box>
                        <Box component="img" src="img/starzel_radar.jpg" sx={{maxHeight: 400, maxWidth: 400}} />
                    </Box>
                    <Box className="r-stack">
                        <Box component="img" src="img/starzel_plot_0.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="1" />
                        <Box component="img" src="img/starzel_plot_1.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="2" />
                        <Box component="img" src="img/starzel_plot_2.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="3" />
                        <Box component="img" src="img/starzel_plot_3.png" sx={{maxHeight: 400}} className="fragment" data-fragment-index="4" />
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
                <p>You may suggest using rainfall radar instead. Indeed, rainfall patterns can be captured quite well in space using radar. Here's an example from the Starzel region in southwest Germany in 2008, where a severe flood occurred. However, you can also see that the storm of interest is shadowed by two other storms.</p>
                <p>The blue line represents the actual flood, while the green line depicts the flood prediction based on radar imagery.</p>
                <p>As you can see, the predicted flood was a two-year event, but the actual flood turned out to be a 100-year event.</p>
                <p>However, if we consider the ground observations in the area alone, we achieve better predictions, in this case.</p>
                <p>To obtain a more precise prediction, we can combine both the accuracy of ground observations and the spatial patterns captured by rainfall radar. By combining the strengths of both data sources, we can generate a more reliable prediction, represented by the red line in this case.</p>
                <p>It's essential to note that point observations are usually precise but may miss events, while radar captures spatial correlations but can be imprecise. Using both data sources simultaneously allows us to harness the power of geostatistics for merging and analyzing this relationship.</p>
            </aside>
        </MainSlide>
    </>)
}

export default Introduction