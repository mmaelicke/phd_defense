import { useState } from "react"
import { Box, Paper, Slider, Stack } from "@mui/material"
import { ReactCompareSlider } from "react-compare-slider"
import { InlineMath } from "react-katex"

const MARKS = [
    {label: <InlineMath math="\frac{5}{256}" />, value: 5},
    {label: <InlineMath math="\frac{10}{256}" />, value: 10},
    {label: <InlineMath math="\frac{20}{256}" />, value: 20},
    {label: <InlineMath math="\frac{50}{256}" />, value: 50},
]

const CompareObservationUncertainty: React.FC = () => {
    // state to load the current image
    const [level, setLevel] = useState<number>(5)

    return <>
        <Stack direction="column" spacing={3} sx={{p: 2}}>
            <Slider value={level} max={50} marks={MARKS} onChange={(e, val) => setLevel(val as number)} valueLabelDisplay="auto" step={null} />
            <Stack direction="row" spacing={3}>
                
                
                    <ReactCompareSlider
                        itemOne={<Box component="img" src="img/motivation_pancake_original.png" sx={{height: 450}} />}
                        itemTwo={<Box component="img" src={`img/motivation_pancake_uncertain_${level}.png`} sx={{height: 450}} />}
                        position={75}
                    />
                    <ReactCompareSlider
                            itemOne={<Box component="img" src="img/motivation_pancake_krige_lo.png" sx={{height: 450}} />}
                            itemTwo={<Box component="img" src="img/motivation_pancake_krige_up.png" sx={{height: 450}} />}
                            position={50}
                            className="fragment zoom-in"
                        />
                
            </Stack>
        </Stack>
    </>
}

export default CompareObservationUncertainty