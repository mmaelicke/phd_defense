import { H1, H2, Slide } from "@gregcello/revealjs-react"
import { Box, Grid, Paper, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"
import BasicVariogram from "../slides/BasicVariogram"

const Introduction: React.FC = () => {
    return (<>
        <Slide autoAnimate>
            <Grid container spacing={0} className="justify-col" sx={{height: '100vh'}}>
                <Grid item xs={12} className="justify-row">
                    <img src="img/logo_kit.png" alt="KIT logo" style={{maxHeight: '170px'}} />
                    <span />
                </Grid>
                <Grid item xs={12}>
                    <H1>
                        From method development to software integration: A comprehensive approach to geostatistical uncertainty
                    </H1>
                    <H2 style={{marginTop: '5rem'}}>PhD Defense by Mirko Mälicke</H2>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </Slide>

        <Outline withFragments />

        <MainSlide title="Why?" id="start-motivation">
            <Paper elevation={3} sx={{padding: '0.3rem'}}>
                <Box component="img" src="img/kidd_fig1.jpg" sx={{maxHeight: 400}} />
                <Typography variant="caption" component="div" sx={{textAlign: 'left', mt: 1}}>
                    Distance to the next professionally operated rain gauge, global coverage. Figure taken from <a href="https://journals.ametsoc.org/view/journals/bams/98/1/bams-d-14-00283.1.xml#:~:text=View%20Full%20Size-,Fig.%201.,-Map%20showing%20the" target="_blank" rel="noreferrer">Kidd et al. (2017)</a>.
                </Typography>
            </Paper>
            <aside className="notes">
                <ul>
                    <li>Germany (2003): 601.6m² of rain gauges</li>
                    <li>if representative for 1km around, still only 1% of earth surface</li>
                </ul>
            </aside>
        </MainSlide>

        <MainSlide title="Why?">
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

        <MainSlide autoAnimate title="Intro to Variograms">
            <BasicVariogram />

        </MainSlide>
    </>)
}

export default Introduction