import { H1, H2, Slide } from "@gregcello/revealjs-react"
import { Grid } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"

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

        <Outline />

        <MainSlide autoAnimate title="Motivation" id="start-motivation">
            <h1>Motivation</h1>
        </MainSlide>
    </>)
}

export default Introduction