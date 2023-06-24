import { useEffect, useRef, useState } from "react"
import { Button, Grid, Slider, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { ThreeDRotation, ViewInAr, ScatterPlot, Straighten, CandlestickChart } from "@mui/icons-material"
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

    // state to switch from 2D to 3D graph
    const [graphType, setGraphType] = useState<'2d' | '3d' | 'ar'>('2d')
    const [GraphElement, setGraphElement] = useState<typeof ForceGraph2D | typeof ForceGraph3D | typeof ForceGraphVR>(ForceGraph3D)

    // heat up a distance-keeping force, when the graph initializes
    useEffect(() => {
        if (graphRef.current) {
            (graphRef.current).d3Force('link')
                .iterations(100)
                .distance((link: any) => link.distance || 5)
                //.iterations(() => 1)
            }
    }, [])

    // change the graph element, when the 2D/3D switch changes
    useEffect(() => {
        if (graphType === '3d') {
            setGraphElement(ForceGraph3D)
        } else if (graphType === 'ar') {
            setGraphElement(ForceGraphVR)
        } else {
            setGraphElement(ForceGraph2D)
        }
    }, [graphType])

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
            
            <Grid item xs={4} justifyContent="space-between" direction="column" display="flex">
                <Stack sx={{p: 1}}>
                    <Stack direction="row" justifyContent="space-between">
                    <ToggleButtonGroup exclusive value={distVal} onChange={(_, val) => setDistVal(val)}>
                        <ToggleButton value="separating" ><Straighten /></ToggleButton>
                        <ToggleButton value="residual"><CandlestickChart /></ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup exclusive value={graphType} onChange={(_, val) => setGraphType(val)}>
                        <ToggleButton value="2d"><ScatterPlot /></ToggleButton>
                        <ToggleButton value="3d"><ThreeDRotation /></ToggleButton>
                        <ToggleButton value="ar"><ViewInAr /></ToggleButton>
                    </ToggleButtonGroup>
                    </Stack>
                    <Stack sx={{p:3}}>
                        <Slider min={MIN_D} max={MAX_D} value={distFilter} valueLabelDisplay="auto" onChange={(_, v) => setDistFilter(v as number[])} /> 
                    </Stack>
                </Stack>
                <Stack sx={{p: 3}}>
                    <Button variant="contained" color="warning" onClick={() => setCurrentGraph('yl')} disabled={currentGraph==='yl'}>Yellow</Button>
                    <Button variant="contained" color="success" onClick={() => setCurrentGraph('gr')} disabled={currentGraph==='gr'}>Green</Button>
                    <Button variant="contained" color="primary" onClick={() => setCurrentGraph('bu')} disabled={currentGraph==='bu'}>Blue</Button>
                </Stack>
                <span />
            </Grid>

            <Grid item xs={8} component="div" ref={containerRef}>
                <GraphElement {...{ 
                    ref: graphRef,
                    graphData: graphData,
                    nodeVal: "obs_norm",
                    height: 450,
                    width: containerRef.current ? containerRef.current.clientWidth : 400,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    linkColor: () => DATA[currentGraph].color,
                    ...( graphType !== '2d' && {linkOpacity: 0.8} ),
                    nodeColor: () => '#2EA28A',
                    linkWidth: 1,
                    //enableNodeDrag
                    //enableNavigationControls
                    showNavInfo: false,
                }}
                />
            </Grid>

        </Grid>
    )
}

export default ClusterGraphs