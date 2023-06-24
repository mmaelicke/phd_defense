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
        </MainSlide>

        <MainSlide title="Observations are sparse" id="start-introduction">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Box className="fragment custom blur-out" data-fragment-index="1">
                    <Box component="img" src="img/kidd_fig1.jpg" sx={{maxHeight: 400}} />
                    <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                        Distance to the next professionally operated rain gauge, global coverage. Figure taken from <a href="https://journals.ametsoc.org/view/journals/bams/98/1/bams-d-14-00283.1.xml#:~:text=View%20Full%20Size-,Fig.%201.,-Map%20showing%20the" target="_blank" rel="noreferrer">Kidd et al. (2017)</a>.
                    </Typography>
                </Box>
                <Stack direction="column" className="fragment zoom-in info-box" spacing={3} data-fragment-index="1">
                    <LI>- Precise <i>point</i> observations</LI>
                    <LI>- but spatially sparse</LI>
                </Stack>
            </Paper>
            
            <aside className="notes">
                <ul>
                    <li>Germany (2003): 601.6m² of rain gauges</li>
                    <li>if representative for 1km around, still only 1% of earth surface</li>
                </ul>
            </aside>
        </MainSlide>

        <MainSlide title="Remote sensing may be imprecise">
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
        </MainSlide>

        {/* <MainSlide title="">
            <Stack direction="column" sx={{textAlign: 'left', height: '100%'}} justifyContent="space-evenly">
                <LI>- Point observations are precise, but may miss events</LI>
                <LI>- Radar captures spatial correlation, but may be imprecise</LI>
                <Box className="fragment">
                    <LI> =&gt; using both data sources at once</LI>
                    <LI> =&gt; <i>geostatistics</i> provide means for merging <strong>and</strong> analyzing this relationship</LI>
                </Box>
            </Stack>
        </MainSlide> */}

    </>)
}

export default Introduction