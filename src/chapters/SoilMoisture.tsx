import MainSlide from "../components/MainSlide"
import Outline from "../slides/Outline"

const SoilMoisture: React.FC = () => {
    return (<>

        <Outline highlight="moisture" id="start-soil-moisture" />

        <MainSlide title="Soil Moisture">
            <h1>Soil Moisture</h1>
        </MainSlide>
    </>)
}

export default SoilMoisture