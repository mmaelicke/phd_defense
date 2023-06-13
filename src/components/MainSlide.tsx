//import { Slide, SlideProps, H2 } from "@gregcello/revealjs-react"
import { Box, Typography } from "@mui/material"
import React from "react"

interface MainSlideProps {
    title?: string,
    autoAnimate?: boolean,
    id?: string
}

const MainSlide: React.FC<React.PropsWithChildren<MainSlideProps>> = ({ children, title, autoAnimate, id }) => {
    return (
        <section {...(id && { id })} {...(autoAnimate && {'data-auto-animate': true})}>
            
                <Box className="justify-row" sx={{height: '65px'}}>
                    <img src="img/logo_kit.png" alt="KIT logo" style={{maxHeight: '65px'}} />
                    { title ? <h2>{ title }</h2> : null}
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

        </section>
    )
}

export default MainSlide