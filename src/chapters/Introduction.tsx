import { Box, Grid, Paper, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import BasicVariogram from "../slides/BasicVariogram"

const Introduction: React.FC = () => {
    return (<>
        <MainSlide title="Observations are sparse" id="start-introduction">
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

        <MainSlide title="Observations">
            <Paper elevation={3} sx={{padding: '0.3rem'}} className="r-stack">
                <Box component="img" src="img/pancake_field_rgb.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_field_r.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_field_sample.png" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/pancake_animation.gif" sx={{maxHeight: 450}} className="fragment" />
                <Box component="img" src="img/lagclasses_animation.gif" sx={{maxHeight: 450}} className="fragment" />
            </Paper>
        </MainSlide>
        
        <MainSlide autoAnimate title="Intro to Variograms">
            <BasicVariogram />

        </MainSlide>
    </>)
}

export default Introduction