import { Paper } from "@mui/material"
import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"


const Software: React.FC = () => {
    return (<>
        <Outline highlight="software" id="start-software" />
        
        <MainSlide title="Software">
            <Paper elevation={3} sx={{height: '100%'}}>
            <iframe data-src="https://skg.geostat.hydrocode.de" style={{width: '100%', height: '100%'}} frameBorder="0" />
            </Paper>
        </MainSlide>
    </>)
}

export default Software