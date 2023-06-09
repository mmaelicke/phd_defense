import { Box, Paper } from "@mui/material"

import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"
import ForceGraphExample from "../slides/ForceGraphExample"
import GraphExamples from "../slides/GraphExamples"
import ClusterGraphs from "../slides/ClusterGraphs"

const SoilMoisture: React.FC = () => {
    return (<>

        <Outline highlight="moisture" />

        <MainSlide title="Soil Moisture" id="start-soil-moisture" autoAnimate>
            <Paper elevation={3} className="r-stack">
                <Box component="img" src="img/moisture_cluster_step1.png" sx={{maxHeight: '450px'}}  />
                <Box component="img" src="img/moisture_cluster_step2.gif" sx={{maxHeight: '450px'}} className="fragment" />
                <Box component="img" src="img/moisture_cluster_step3.png" sx={{maxHeight: '450px'}} className="fragment" />
            </Paper>
        </MainSlide>

        <MainSlide title="Force-directed graphs">
            <ForceGraphExample />
        </MainSlide>

        <MainSlide title="Benchmark Graphs">
            <Paper elevation={3}>
                <GraphExamples />
            </Paper>
        </MainSlide>

        <MainSlide title="Cluster mean covariance graph">
            <Paper elevation={3}>
                <ClusterGraphs />
            </Paper>
        </MainSlide>

    </>)
}

export default SoilMoisture