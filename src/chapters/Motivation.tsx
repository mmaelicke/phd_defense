import { Typography } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"

const Motivation: React.FC = () => {
    return <>
        <MainSlide id="start-motivation">
            <Typography variant="h2" component="div">
                How can pancakes help us to understand uncertainties in geostatistics?
            </Typography>
        </MainSlide>

        <Outline withFragments />
    </>
}

export default Motivation