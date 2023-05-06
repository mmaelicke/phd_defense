import { Slide, SlideProps, H2 } from "@gregcello/revealjs-react"
import { Grid } from "@mui/material"
import React from "react"

interface MainSlideProps extends SlideProps {
    title?: string
}

const MainSlide: React.FC<React.PropsWithChildren<MainSlideProps>> = ({ children, title, ...slideProps }) => {
    return (
        <Slide {...slideProps}>
            <Grid container spacing={0} className="justify-col" sx={{height: '100vh'}}>
                <Grid item xs={12} className="justify-row">
                    <img src="img/logo_kit.png" alt="KIT logo" style={{maxHeight: '65px'}} />
                    { title ? <H2>{ title }</H2> : null}
                    <span />
                </Grid>
                <Grid item xs={12}>
                    { children }
                </Grid>
                <Grid item xs={12}>
                    Footer line without content
                </Grid>
            </Grid>
        </Slide>
    )
}

export default MainSlide