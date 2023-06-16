import { Box, Paper, Stack, Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"

import CompareObservationUncertainty from "../slides/CompareObservationUncertainty"

const LI: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Typography variant="h6" component="div">{ children }</Typography>
)

const Motivation: React.FC = () => {
    return <>
        <MainSlide id="start-motivation">
            <Typography variant="h2" component="div">
                How can pancakes help us to build better geostatistical software?
            </Typography>
        </MainSlide>

        <MainSlide title="The original pancake">
            <Paper elevation={3} sx={{width: 'fit-content', p: 1}}>
                <Box component="img" src="img/first_pancake.png" sx={{height: 450}} />
            </Paper>
        </MainSlide>

        <MainSlide title="Interpolate a pancake">
            <Paper elevation={3}>
                <Stack direction="row" spacing={3} sx={{pt: 2}}>
                    <Box>
                        <Typography variant="h6" component="div">Pancake on a grid</Typography>
                        <Box component="img" src="img/motivation_pancake_original.png" sx={{height: 450}} />
                    </Box>
                    <Box className="fragment">
                        <Typography variant="h6" component="div">Kriging interpolation</Typography>
                        <Box component="img" src="img/motivation_pancake_krige.png" sx={{height: 450}} />
                    </Box>
                </Stack>
            </Paper>
        </MainSlide>

        <MainSlide title="Uncertain pancakes">
            <Paper elevation={3}>
                <CompareObservationUncertainty />
            </Paper>
        </MainSlide>

        <MainSlide title="Pancakes as datasets">
            <Stack direction="column" spacing={3} sx={{textAlign: 'left'}}>
                <LI>-&gt; Software stack can easily be tested across a large number of geostatistical datasets</LI>
                <LI>- Software stack could generalize to pancakes</LI>
                
                <Stack direction="column" spacing={3} className="fragment">
                <LI>- Pancake prooved to be suitable datasets</LI>
                <LI>- Spatial variations are not purley random, but driven by thermodynamic principles</LI>
                <LI>- Not bound to specificities of any location of the earth (uniqueness of location)</LI>
                </Stack>
            </Stack>
        </MainSlide>

        <Outline withFragments />
    </>
}

export default Motivation