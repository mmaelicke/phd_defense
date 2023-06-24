import { Box, Grid, Stack, Tab, Tabs } from "@mui/material"
import { useState } from "react"

const GraphExamples: React.FC = () => {
    // state to handle the current tab
    const [tab, setTab] = useState<number>(1)

    return (<>
        <Box sx={{borderBottom: '1px', borderColor: 'divider'}}>
            <Tabs value={tab} onChange={(_, value) => setTab(value as number)}>
                <Tab label="Random distance matrix" value={1} />
                <Tab label="Meshgrid - high variance" value={2} />
                <Tab label="Meshgrid - no variance" value={3} />
            </Tabs>
        </Box>
        <Stack direction="row" spacing={2}>
            <Stack direction="column" justifyContent="center">
                <Box component="img" src={`img/benchmark_example_${tab}.png`} sx={{maxWidth: '350px', maxHeight: '350px', heigth: 'auto'}} alt="Example field" />
            </Stack>
            <Box component="img" src={`img/benchmark_graph_${tab}.gif`} alt="Animation of graph" className="fragment" data-fragment-index="1"/>
        </Stack>
        </>)
}

export default GraphExamples