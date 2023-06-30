import { Box, Slider, Stack } from "@mui/material"
import { useState } from "react"
import { InlineMath } from "react-katex"

const marks = [
    {label: <InlineMath math="\frac{0}{10}" />, value: 0},
    {label: <InlineMath math="\frac{1}{10}" />, value: 1},
    {label: <InlineMath math="\frac{2}{10}" />, value: 2},
    {label: <InlineMath math="\frac{3}{10}" />, value: 3},
    {label: <InlineMath math="\frac{4}{10}" />, value: 4},
    {label: <InlineMath math="\frac{5}{10}" />, value: 5},
    {label: <InlineMath math="\frac{6}{10}" />, value: 6}
]

const NuggetSillExample: React.FC = () => {
    const [nugget, setNugget] = useState<number>(0)
    return (<>
        <Stack spacing={2} direction="column">
            <Box sx={{px: 3, pt: 1}}>
                <Slider color={(nugget >= 5 ? 'error' : nugget >= 3 ? 'warning' : 'primary') as 'primary' } value={nugget} marks={marks} step={null} onChange={(_, v) => setNugget(v as number)} min={0} max={10} />
            </Box>
            <Box component="img" src={`img/motivation_pancake_krige_nugget_${nugget}.png`} sx={{height: 450}} />
        </Stack>
    </>)
}

export default NuggetSillExample