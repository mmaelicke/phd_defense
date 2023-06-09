import { useEffect, useRef, useState } from "react"
import { Button, FormControl, FormControlLabel, Grid, Slider, Stack, Switch, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from "react-force-graph"

import './ClusterGraphs.css'

// pre-load all three cluster graphs
import YL from "./data/cluster_y.json"
import GR from "./data/cluster_g.json"
import BU from "./data/cluster_b.json"
import cloneDeep from "lodash.clonedeep"

// group into one object
const DATA = {
    yl: {graph: YL, color: '#ffd700'},
    gr: {graph: GR, color: '#008000'},
    bu: {graph: BU, color: '#0077be'},
}

// calculate the min and max for the distance slider
const MIN_D = YL.links.reduce((a, b) => a.separating < b.separating ? a : b).separating
const MAX_D = YL.links.reduce((a, b) => a.separating > b.separating ? a : b).separating

const ClusterGraphs: React.FC = () => {
    // create a reference to the canvas container and the graph itself
    const containerRef = useRef<HTMLDivElement>(null)
    const graphRef = useRef<any>(null)

    // set the current distance value to use and a filter for the distance
    const [distVal, setDistVal] = useState<'separating' | 'residual'>('separating')
    const [distFilter, setDistFilter] = useState<number[]>([MIN_D, 550])

    // state for loading the correct graph
    const [currentGraph, setCurrentGraph] = useState<'yl' | 'gr' | 'bu'>('yl')
    const [graphData, setGraphData] = useState<typeof DATA.yl.graph>(cloneDeep(DATA.yl.graph))

    // heat up a distance-keeping force, when the graph initializes
    useEffect(() => {
        if (graphRef.current) {
            (graphRef.current).d3Force('link')
                .iterations(100)
                .distance((link: any) => link.distance || 5)
                //.iterations(() => 1)
            }
    }, [])

    // change the distance-keeping force, when the distance value changes or the filter changes
    useEffect(() => {
        // create the new links
        const links = DATA[currentGraph].graph.links
        .filter((link: any) => link.separating >= distFilter[0] && link.separating <= distFilter[1])
        .map((link: any) => {
            return {...link, distance: link[`${distVal}_norm`]}
        })

        // copy the graph data with new links
        const newGraphData = cloneDeep({nodes: DATA[currentGraph].graph.nodes, links})

        // update the state
        setGraphData(newGraphData) 
    }, [distVal, distFilter, currentGraph])

    return (
        <Grid container>
            
            <Grid item xs={4} justifyContent="space-around" direction="column" display="flex">
                <Stack sx={{p: 3}}>
                    <Stack direction="row" justifyContent="stretch">
                        
                    </Stack>
                    <ToggleButtonGroup exclusive value={distVal} onChange={(_, val) => setDistVal(val)}>
                        <ToggleButton value="separating" >Distance</ToggleButton>
                        <ToggleButton value="residual">Value difference</ToggleButton>
                    </ToggleButtonGroup>
                    <Stack sx={{p:3}}>
                        <Slider min={MIN_D} max={MAX_D} value={distFilter} valueLabelDisplay="auto" onChange={(_, v) => setDistFilter(v as number[])} /> 
                    </Stack>
                </Stack>
                <Stack sx={{p: 3}}>
                    <Button variant="contained" color="warning" onClick={() => setCurrentGraph('yl')} disabled={currentGraph==='yl'}>Yellow</Button>
                    <Button variant="contained" color="success" onClick={() => setCurrentGraph('gr')} disabled={currentGraph==='gr'}>Green</Button>
                    <Button variant="contained" color="primary" onClick={() => setCurrentGraph('bu')} disabled={currentGraph==='bu'}>Blue</Button>
                </Stack>
            </Grid>

            <Grid item xs={8} component="div" ref={containerRef}>
                <ForceGraph3D 
                    ref={graphRef}
                    graphData={graphData}
                    nodeVal="obs_norm"
                    height={450}
                    width={containerRef.current ? containerRef.current.clientWidth : 400}
                    backgroundColor="rgba(0,0,0,0.8)"
                    linkColor={() => DATA[currentGraph].color}
                    linkOpacity={0.5}
                    nodeColor={() => '#2EA28A'}
                    linkWidth={1}
                    enableNodeDrag
                    enableNavigationControls
                    showNavInfo={false}
                />
            </Grid>

        </Grid>
    )
}

export default ClusterGraphs