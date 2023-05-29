import { Paper } from "@mui/material"
import MainSlide from "../components/MainSlide"
import BasicUncertainty from "../slides/BasicUncertainty"
import BasicUncertainModels from "../slides/BasicUncertainModels"

const Uncertainty: React.FC = () => {
    return (<>
        <MainSlide title="Uncertainty" id="start-uncertainty">
            <Paper elevation={3} sx={{p: 2}}>
                <BasicUncertainty />
            </Paper>
        </MainSlide>

        <MainSlide title="Uncertain Models">
            <Paper elevation={3} sx={{p: 2}}>
                <BasicUncertainModels />
            </Paper>
        </MainSlide>
    </>)
}

export default Uncertainty