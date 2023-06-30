import { Box, Paper, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"

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
    </>)
}

export default Appendix