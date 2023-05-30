import { Paper } from "@mui/material"

import MainSlide from "../components/MainSlide"
import BasicUncertainty from "../slides/BasicUncertainty"
import BasicUncertainModels from "../slides/BasicUncertainModels"
import Outline from "../slides/Outline"
import PropagationMethods from "../slides/PropagationMethods/PropagationMethods"

const Uncertainty: React.FC = () => {
    return (<>
        <Outline highlight="uncertainty" />

        <MainSlide title="Uncertainty" id="start-uncertainty">
            <PropagationMethods />
        </MainSlide>
        
        <MainSlide title="Uncertainty">
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