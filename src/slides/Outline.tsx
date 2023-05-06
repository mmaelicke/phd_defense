import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"

const Outline: React.FC = () => {
    return (
        <MainSlide title="Outline" autoAnimate id="outline">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardActionArea href="#/start-motivation">
                            <CardContent>
                                <CardMedia component="img" image="https://imgs.xkcd.com/comics/like_im_five.png" style={{height: '100%', maxHeight: '350px'}} />
                                <Typography variant="h5" component="div">Motivation & Introduction</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className="fragment fade-in">
                        <CardActionArea href="#/start-software">
                            <CardMedia component="img" image="img/geostatistical_software.png" style={{height: '100%', maxHeight: '350px'}} />
                            <CardContent>
                                <Typography variant="h5" component="div">Geostatistical Software</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className="fragment fade-in">
                        <CardActionArea href="#/start-uncertainty">
                            <CardMedia component="img" image="img/geostatistical_uncertainty.png" style={{height: '100%', maxHeight: '350px'}} />
                            <CardContent>
                                <Typography variant="h5" component="div">Uncertainty in Geostatistics</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card className="fragment fade-in">
                        <CardActionArea href="#/start-soil-moisture">
                            <CardContent>
                                <Typography variant="h5" component="div">Dynamic patterns in Soil Moisture</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </MainSlide>
    )
}

export default Outline