import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"

import './Outline.css'


interface OutlineParams {
    withFragments?: boolean
    withNotes?: boolean
    highlight?: string
    id?: string
}

const Outline: React.FC<OutlineParams> = ({ withFragments, withNotes, highlight, id }) => {
    return (
        <MainSlide title="Outline" autoAnimate id={id ? id : "outline"}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardActionArea href="#/motivation">
                            <CardContent>
                                <CardMedia component="img" image="https://imgs.xkcd.com/comics/like_im_five.png" className="card-img" />
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
                                <Typography variant="h5" component="div">Soil Moisture patterns</Typography>
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

            { withNotes && (<aside className="notes">
                <p>After this short motivation, I hope you are on board for a bit more of introduction now.</p>
                <p>Then, I will present some exciting findings about uncertainties in variogram analyses.</p>
                <p>Next, the developed research software will be demonstrated at the example of a unique soil moisture dataset from Luxemburg.</p>
                <p>And finally I will wrap this whole thing up and give a short outlook.</p>
            </aside>) }
        </MainSlide>
    )
}

export default Outline