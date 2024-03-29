import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

import './Outline.css'


interface OutlineParams {
    withFragments?: boolean
    highlight?: string
}

const Outline: React.FC<OutlineParams> = ({ withFragments, highlight}) => {
    return (
        // <MainSlide title="Outline" autoAnimate id={id ? id : "outline"}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardActionArea href="#/motivation">
                            <CardContent>
                                <CardMedia component="img" image="img/Attert_overview.png" className="card-img" sx={{minHeight: 300}} />
                                <Typography variant="h5" component="div">Motivation & Introduction</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className={withFragments ? "fragment fade-in" : ""} sx={{backgroundColor: highlight==='uncertainty' ? 'rgba(1,1,1,0.2)' : 'transparent'}}>
                        <CardActionArea href="#/start-uncertainty">
                            <CardMedia component="img" image="img/geostatistical_uncertainty.png" className="card-img" />
                            <CardContent>
                                <Typography variant="h5" component="div">Uncertainty in Geostatistics</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className={withFragments ? "fragment fade-in" : ""} sx={{backgroundColor: highlight==='moisture' ? 'rgba(1,1,1,0.2)' : 'transparent'}}>
                        <CardActionArea href="#/start-soil-moisture">
                            <CardMedia component="img" image="img/geostatistical_patterns.png" className="card-img" />
                            <CardContent>
                                <Typography variant="h5" component="div">Software &amp; Reproducibility</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className={withFragments ? "fragment fade-in" : ""} sx={{backgroundColor: highlight==='software' ? 'rgba(1,1,1,0.2)' : 'transparent'}}>
                        <CardActionArea href="#/start-software">
                            <CardMedia component="img" image="img/geostatistical_software.png" className="card-img" />
                            <CardContent>
                                <Typography variant="h5" component="div">Conclusion & Outlook</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            // { withNotes && (<aside className="notes">
            //     <p>As a starter we will discuss what geostatistics actually is.</p>
            //     <p>Then, there are two main courses: some exciting findings about uncertainties in variogram analyses,</p>
            //     <p>and the developed software, SciKit-GStat will be demonstrated at the example of a unique soil moisture dataset from Luxemburg.</p>
            //     <p>The desert will be some take-home messages and hopefully a fruitful discussion afterwards.</p>
            // </aside>) }
        // </MainSlide>
    )
}

export default Outline