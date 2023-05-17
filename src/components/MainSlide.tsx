import { Slide, SlideProps, H2 } from "@gregcello/revealjs-react"
import { Grid, Typography } from "@mui/material"
import React from "react"

interface MainSlideProps extends SlideProps {
    title?: string
}

const MainSlide: React.FC<React.PropsWithChildren<MainSlideProps>> = ({ children, title, ...slideProps }) => {
    return (
        <Slide {...slideProps}>
            <Grid container spacing={0} className="justify-col" sx={{minHeight: '100vh', maxHeight: '100vh', p: 0}}>
                <Grid item xs={12} className="justify-row" sx={{height: '65px'}}>
                    <img src="img/logo_kit.png" alt="KIT logo" style={{maxHeight: '65px'}} />
                    { title ? <H2>{ title }</H2> : null}
                    <span />
                </Grid>
                <Grid item xs={12} sx={{height: 'calc(100% - 125px)'}}>
                    { children }
                </Grid>
                <Grid item xs={12} sx={{height: '40px'}}>
                    <Typography variant="caption" component="div" sx={{textAlign: 'center'}}>
                        Mälicke - PhD Defense - geostatistical Software - (17.07.2023)
                    </Typography>
                </Grid>
            </Grid>
        </Slide>
    )
}

export default MainSlide