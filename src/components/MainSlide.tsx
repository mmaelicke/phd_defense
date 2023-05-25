import { Slide, SlideProps, H2 } from "@gregcello/revealjs-react"
import { Box, Grid, Typography } from "@mui/material"
import React from "react"

interface MainSlideProps extends SlideProps {
    title?: string
}

const MainSlide: React.FC<React.PropsWithChildren<MainSlideProps>> = ({ children, title, ...slideProps }) => {
    return (
        <Slide {...slideProps}>
            
                <Box className="justify-row" sx={{height: '65px'}}>
                    <img src="img/logo_kit.png" alt="KIT logo" style={{maxHeight: '65px'}} />
                    { title ? <H2>{ title }</H2> : null}
                    <span />
                </Box>
                <Box className="r-stretch" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', m: 1}}>
                    { children }
                </Box>
                <Box sx={{height: '40px'}}>
                    <Typography variant="caption" component="div" sx={{textAlign: 'center'}}>
                        Mälicke - PhD Defense - geostatistical Software - (17.07.2023)
                    </Typography>
                </Box>

        </Slide>
    )
}

export default MainSlide