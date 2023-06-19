import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import React from "react"


const LI: React.FC<React.PropsWithChildren> = ({children}) => (
    <Typography variant="h6" component="div">{children}</Typography>
)

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
            <Paper elevation={3} sx={{padding: '0.3rem'}}>
            <Stack direction="row" spacing={2}>
                <Box>
                    <Box component="img" src="img/kidd_fig1.jpg" sx={{maxHeight: 400}} />
                    <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                        Distance to the next professionally operated rain gauge, global coverage. Figure taken from <a href="https://journals.ametsoc.org/view/journals/bams/98/1/bams-d-14-00283.1.xml#:~:text=View%20Full%20Size-,Fig.%201.,-Map%20showing%20the" target="_blank" rel="noreferrer">Kidd et al. (2017)</a>.
                    </Typography>
                </Box>
                <Stack direction="column" className="fragment" justifyContent="space-evenly">
                    <span />
                    <Typography variant="h6">Precise <i>point</i> observations</Typography>
                    <Typography variant="h6" className="fragment">but spatially sparse</Typography>
                    <span />
                </Stack>
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
            <Paper elevation={3} sx={{padding: '0.3rem'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src="img/starzel_radar.jpg" sx={{maxHeight: 400}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src="img/starzel_model.jpg" sx={{maxHeight: 400}} className="fragment custom blur transparent" />
                    </Grid>
                </Grid>
                
            </Paper>
        </MainSlide>

        <MainSlide title="">
            <Stack direction="column" sx={{textAlign: 'left', height: '100%'}} justifyContent="space-evenly">
                <LI>- Point observations are precise, but may miss events</LI>
                <LI>- Radar capture spatial correlation, but may be imprecise</LI>
                <Box className="fragment">
                    <LI> =&gt; using both data sources at once</LI>
                    <LI> =&gt; <i>geostatistics</i> provide means for merging <strong>and</strong> analyzing this relationship</LI>
                </Box>
            </Stack>
        </MainSlide>

        {/* <MainSlide title="Building a pancake variogram">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Box component="img" src="img/pancake_field_rgb.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_field_r.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_field_sample.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_animation.gif" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/lagclasses_animation.gif" sx={{maxHeight: 450}} className="fragment" />
            </Paper>
        </MainSlide> */}
        
        {/* <MainSlide autoAnimate title="Intro to Variograms">
            <BasicVariogram />
        </MainSlide> */}

        <MainSlide title="Uncertain observations">
            <Stack direction="row" sx={{height: '100%'}}>
                <Stack direction="column" justifyContent="space-evenly">
                    <span /><span />
                    <LI>- Variogram correlates distance to similarity</LI>
                    <LI>- Modelled by a formal mathematical function</LI>
                    <LI>- Needed for interpolation or simulation</LI>
                    <LI>- </LI>
                    <span /><span />
                </Stack>
            </Stack>
        </MainSlide>
    </>)
}

export default Introduction