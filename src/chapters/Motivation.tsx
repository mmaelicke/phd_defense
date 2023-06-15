import { Box, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"
import { ReactCompareSlider } from "react-compare-slider"


const Motivation: React.FC = () => {
    return <>
        <MainSlide id="start-motivation">
            <Typography variant="h2" component="div">
                How can pancakes help us to build better geostatistical software?
            </Typography>
        </MainSlide>

        <MainSlide title="">
            <Paper elevation={3}>
                <Box component="img" src="img/first_pancake.png" sx={{height: 450}} />
            </Paper>
        </MainSlide>

        <MainSlide>
            <Paper elevation={3}>
                <Stack direction="row" spacing={3} sx={{pt: 2}}>
                    <Box>
                        <Typography variant="h6" component="div">Original pancake</Typography>
                        <Box component="img" src="img/motivation_pancake_original.png" sx={{height: 450}} />
                    </Box>
                    <Box className="fragment">
                        <Typography variant="h6" component="div">Kriging interpolation</Typography>
                        <Box component="img" src="img/motivation_pancake_krige.png" sx={{height: 450}} />
                    </Box>
                </Stack>
            </Paper>
        </MainSlide>

        <MainSlide>
            <Paper elevation={3}>
                <ReactCompareSlider
                    itemOne={<Box component="img" src="img/motivation_pancake_original.png" sx={{height: 450}} />}
                    itemTwo={<Box component="img" src="img/motivation_pancake_uncertain.png" sx={{height: 450}} />}
                    position={75}
                />
            </Paper>
        </MainSlide>

        <Outline withFragments />
    </>
}

export default Motivation