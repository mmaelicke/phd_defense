import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import LI from "../components/LI"
import SoftwareFlowchart from "../slides/SoftwareFlowchart"

const Appendix: React.FC = () => {
    return (<>
        <MainSlide title="Appendix" id="appendix" visibility="uncounted">
            <Box sx={{textAlign: 'left'}}>
                <Typography variant="h3" component="div">References</Typography>
                <ul>
                    <li>Kidd, Chris, Andreas Becker, George J. Huffman, Catherine L. Muller, Paul Joe, Gail Skofronick-Jackson, and Dalia B. Kirschbaum. "So, How Much of the Earth's Surface Is Covered by Rain Gauges?". <i>Bulletin of the American Meteorological Society</i> 98.1 (2017): 69-78. <a href="https://doi.org/10.1175/BAMS-D-14-00283.1" target="_blank" rel="noreferrer">https://doi.org/10.1175/BAMS-D-14-00283.1</a></li>
                    <li style={{marginTop: '1rem'}}>Loritz, R., Kleidon, A., Jackisch, C., Westhoff, M., Ehret, U., Gupta, H., and Zehe, E.: "A topographic index explaining hydrological similarity by accounting for the joint controls of runoff formation". <i>Hydrol. Earth Syst. Sci.</i>, 23, 3807–3821 (2019). <a href="https://doi.org/10.5194/hess-23-3807-2019" target="blank" rel="noreferrer">https://doi.org/10.5194/hess-23-3807-2019</a></li>
                </ul>
            </Box>
        </MainSlide>

        <section>
            <MainSlide title="Pancake model parameter grid search" visibility="uncounted" id="grid-search">
                <Paper elevation={3} sx={{p: 1}}>
                    <Box component="img" src="img/grid_search.png" sx={{height: 450}} />
                </Paper>
            </MainSlide>

            <MainSlide title="Pancake kriging uncertainty bounds" visibility="uncounted">
                <Paper elevation={3} sx={{p: 1, width: 'fit-content', m: 'auto'}}>
                    <Box component="img" src="img/pancake_krige_uncertainty.png" sx={{maxHeight: 450, maxWidth: '100%', width: 'auto', height: 'auto'}} />
                </Paper>
            </MainSlide>
        </section>

        <section>
            <MainSlide title="Software Overview" id="software" visibility="uncounted">
                <Box className="r-stack">
                    <Box className="fragments custom blur-out" data-fragment-index="2">
                        <SoftwareFlowchart />
                    </Box>
                    {/* <Stack direction="column" spacing={3} sx={{p: 3}} className="info-box fragment zoom-in" data-fragment-index="2">
                        <LI>- open-source package actively developed since 2017</LI>
                        <LI>- integrates well with packages for scientific computing</LI>
                        <LI>- extensive documentation & Model description paper in GMD</LI>
                        <LI>- used in at least 4 different summer schools</LI>
                    </Stack> */}

                    <aside className="notes">
                        <p>Now, let's discuss the software. The software is called SciKit-GStat, an open-source Python package widely recognized and accepted by the community. It integrates seamlessly with typical geostatistical and scientific packages in Python, such as NumPy, SciPy, and scikit-learn.</p>
                        <p>Additionally, I developed an extension dedicated to uncertainty within SciKit-GStat. I am aware of a number of third-party applications building on SciKit-GStat.</p>
                        <p>Finally, I created a suite of educational web applications called geostat apps, leveraging the capabilities of this software. We will delve into that in more detail later on.</p>
                        <p>To enhance interoperability, SciKit-GStat provides interfaces to GSTools, GStatSim, and SciKit-Learn, opening up broader possibilities for geostatistical analysis</p>
                    </aside>
                </Box>
                
            </MainSlide>

            <MainSlide title="Software Overview" visibility="uncounted">
                <SoftwareFlowchart withCode />
            </MainSlide>

            <MainSlide title="SciKit-GStat" visibility="uncounted" id="skgstat">
                    <Grid container>
                        
                        <Grid item xs={12} md={6} spacing={1}>
                            <Typography variant="h5"  sx={{textAlign: 'left', my: 2}}>Anisotropic variograms</Typography>
                            <Stack direction="column">
                                <LI>- Includes only point pairs within specified range of angles</LI>
                                <LI>- Can handle arbitrary number of different angles</LI>
                                <LI>- Only for 1D and 2D coordinates</LI>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={0} sx={{p: 1, width: 'fit-content', m: 'auto'}}>
                                <Box component="img" src="img/pancake_pair_field.png" sx={{height: '250px'}} />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5"  sx={{textAlign: 'left', my: 3}}>Spatio-temporal variograms</Typography>
                            <Stack direction="column">
                                <LI>- SciKit-GStat provides three spatio-temporal models</LI>
                                <LI>- Allows for irrelgular time-steps</LI>
                                <LI>- Cannot handle sparse time-axis (yet)</LI>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Paper elevation={0} sx={{p: 1, width: 'fit-content', m: 'auto'}}>
                                <Box component="img" src="img/st_3dplot.png" sx={{height: '250px'}} />
                            </Paper>
                        </Grid>

                    </Grid>
            </MainSlide>
        </section>

    </>)
}

export default Appendix