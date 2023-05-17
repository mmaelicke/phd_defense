import { Box, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"

const Appendix: React.FC = () => {
    return (<>
        <MainSlide title="Appendix" id="appendix">
            <Box sx={{textAlign: 'left'}}>
                <Typography variant="h3" component="div">References</Typography>
                <ul>
                    <li>Kidd, Chris, Andreas Becker, George J. Huffman, Catherine L. Muller, Paul Joe, Gail Skofronick-Jackson, and Dalia B. Kirschbaum. "So, How Much of the Earth's Surface Is Covered by Rain Gauges?". <i>Bulletin of the American Meteorological Society</i> 98.1 (2017): 69-78. <a href="https://doi.org/10.1175/BAMS-D-14-00283.1" target="_blank" rel="noreferrer">https://doi.org/10.1175/BAMS-D-14-00283.1</a></li>
                </ul>
            </Box>
        </MainSlide>
    </>)
}

export default Appendix