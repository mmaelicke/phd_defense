import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"

import './Outline.css'


interface OutlineParams {
    withFragments?: boolean
    highlight?: string
    id?: string
}

const Outline: React.FC<OutlineParams> = ({ withFragments, highlight, id }) => {
    return (
        <MainSlide title="Outline" autoAnimate id={id ? id : "outline"}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardActionArea href="#/start-motivation">
                            <CardContent>
                                <CardMedia component="img" image="https://imgs.xkcd.com/comics/like_im_five.png" className="card-img" />
                                <Typography variant="h5" component="div">Motivation & Introduction</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className={withFragments ? "fragment" : ""} sx={{backgroundColor: highlight==='software' ? 'rgba(1,1,1,0.2)' : 'transparent'}}>
                        <CardActionArea href="#/start-software">
                            <CardMedia component="img" image="img/geostatistical_software.png" className="card-img" />
                            <CardContent>
                                <Typography variant="h5" component="div">Geostatistical Software</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className={withFragments ? "fragment" : ""} sx={{backgroundColor: highlight==='uncertainty' ? 'rgba(1,1,1,0.2)' : 'transparent'}}>
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
                                <Typography variant="h5" component="div">Soil Moisture patterns</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </MainSlide>
    )
}

export default Outline