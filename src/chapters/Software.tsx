import { Paper } from "@mui/material"

import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"
import SoftwareFlowchart from "../slides/SoftwareFlowchart"


const Software: React.FC = () => {
    return (<>
        <Outline highlight="software" />
        
        <MainSlide title="Software" id="start-software">
            <Paper elevation={3} sx={{height: '100%'}}>
            <iframe data-src="https://skg.geostat.hydrocode.de" style={{width: '100%', height: '100%'}} frameBorder="0" title="Software example"/>
            </Paper>
        </MainSlide>

        <MainSlide title="Software Overview">
            <SoftwareFlowchart />
        </MainSlide>
    </>)
}

export default Software