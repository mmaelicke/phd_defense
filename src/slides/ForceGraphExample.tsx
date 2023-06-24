import { Button, CircularProgress, Grid, Paper, Slider, Stack } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { ForceGraph3D, ForceGraph2D } from 'react-force-graph'

import './ForceGraphExample.css'
import cloneDeep from 'lodash.clonedeep'

// generate some sample data
const SAMPLE = {
    nodes: [{id: "1", size: 3, name: 'Observation 1'}, {id: "2", size: 3, name: 'Observation 2'}, {id: "3", size: 3, name: 'Obersavtion 3'}],
    links: [
        {source: "1", target: "2", distance: 10, color: 'green', label: '10'}, 
        {source: "2", target: "3", distance: 30, color: 'red', label: '30'},
    ]
}

// set the number of nodes for the large graph
const N = 25
const K = 100

interface Node {
    id: string
    size?: number
}

interface Link {
    source: string
    target: string
    distance?: number
    strength?: number
    color?: string
    label?: string
    name?: string
}

const ForceGraphExample = () => {
    // state for controlling the current step
    const [withTriangle, setWithTriangle] = useState<boolean>(false)
    const [withLargeGraph, setWithLargeGraph] = useState<boolean>(false)
    const [armed, setArmed] = useState<boolean>(false)

    // get a reference to the Paper
    const containerRef = useRef<HTMLDivElement>(null)

    // get a reference to the Graph
    const graphRef = useRef<any>(null)
    
    // state for graph data
    const [graphData, setGraphData] = useState<{nodes: Node[], links: Link[]}>(SAMPLE)

    // loading screen
    useEffect(() => {
        setTimeout(() => setArmed(true), 1500)
    }, [])

    // adjust the distance and stregth of the links, when links change
    useEffect(() => {
        if (graphRef.current && armed) {
            //graphRef.current.d3Force('link', null);
            (graphRef.current).d3Force('link')
                .distance((link: Link) => link.distance || 5)
                //.strength((link: Link) => link.strength || 0.1)
                //.iterations(() => 100)
        }
    }, [armed])

    // handle slider change
    const onLinkChange = (index: number, value: number) => {
        if (index >= graphData.links.length) return

        // copy the graph data
        const newGraphData = cloneDeep(graphData)
        newGraphData.links[index].distance = value
        newGraphData.links[index].label = `${value}`

        // update the graph data
        setGraphData(newGraphData)
    }

    // add or remove a new link to the graph if withTriangle changes
    useEffect(() => {
        // copy the graph data
        const newGraphData = cloneDeep(graphData)

        // add or remove the link
        if (withTriangle) {
            newGraphData.links.push({source: "1", target: "3", distance: 10, color: 'blue', label: '10'})
        } else {
            newGraphData.links = newGraphData.links.filter(l => l.color !== 'blue')
        }

        // update the graph data
        setGraphData(newGraphData)
    }, [withTriangle])

    // if withLargeGraphe changes, add 15 random nodes and 30 random links, or remove them
    useEffect(() => {
        // copy the graph data
        const newGraphData = cloneDeep(graphData)

        // add or remove the nodes
        if (withLargeGraph) {
            for (let i = 4; i <= N; i++) {
                newGraphData.nodes.push({id: `${i}`, size: 3})
            }
            for (let i = 0; i <= K; i++) {
                // with a chance of 30%, connect one of the first 3 nodes to a random node
                let ii: number
                if (Math.random() < 0.3) {
                    ii = Math.floor(Math.random() * 2.99) + 1
                } else {
                    ii = Math.floor(Math.random() * (N - 3.01)) + 4
                }
                    
                // get a random connection
                let ij = Math.floor(Math.random() * (N - 3.01)) + 4
                while (ii === ij) {
                    ij = Math.floor(Math.random() * (N - 3.01)) + 4
                }
                newGraphData.links.push({source: `${ii}`, target: `${ij}`, distance: Math.floor(Math.random() * 50) + 1, color: 'gray', name: 'random'})
            }
        } else {
            newGraphData.nodes = newGraphData.nodes.filter(n => parseInt(n.id) < 4)
            newGraphData.links = newGraphData.links.filter(l => l.name! !== 'random')
        }

        // update the graph data
        setGraphData(newGraphData)
    }, [withLargeGraph])

    // render
    return (
        <Paper elevation={3} sx={{p: 1}}>
            <Grid container>
                
                <Grid item xs={4} justifyContent="space-around" direction="column" display="flex">
                    <Stack sx={{p: 3}}>
                        <Slider min={1} max={100} defaultValue={10} sx={{color: 'success.main'}} valueLabelDisplay="auto" onChange={(e, value) => onLinkChange(0, value as number)} />
                        <Slider min={1} max={100} defaultValue={30} sx={{color: 'error.main'}} valueLabelDisplay="auto" onChange={(e, value) => onLinkChange(1, value as number)} />
                        { withTriangle ? (
                            <Slider min={1} max={100} defaultValue={10} sx={{color: 'primary.main'}} valueLabelDisplay="auto" onChange={(e, value) => onLinkChange(2, value as number)} />
                        ) : null }
                    </Stack>
                    <Stack sx={{p: 3}}>
                        <Button variant="outlined" color={withTriangle ? 'error' : 'warning'} onClick={() => setWithTriangle(!withTriangle)}>
                            {withTriangle ? 'Remove blue' : 'Triangle'}
                        </Button>
                        <Button variant="outlined" color={withLargeGraph ? 'error' : 'success'} onClick={() => setWithLargeGraph(!withLargeGraph)}>
                            {withLargeGraph ? 'Small Graph' : 'Large Graph' }
                        </Button>
                    </Stack>
                </Grid>
                
                <Grid item xs={8} component="div" ref={containerRef} sx={{p: 0, borderRadius: '5px'}}>
                    { !armed ? (
                        <Stack direction="column" justifyContent="center" alignItems="center" sx={{height: '450px'}}>
                            {/* <Typography variant="h6">Loading...</Typography> */}
                            <CircularProgress />
                        </Stack>
                    ) : (
                        <ForceGraph3D
                            ref={graphRef} 
                            graphData={graphData} 
                            nodeVal="value"
                            height={450}
                            width={containerRef.current ? containerRef.current.clientWidth : 400}
                            backgroundColor='rgba(0,0,0,0.0)'
                            linkColor={l => l.color ? l.color : 'rgb(0,0,0)'} 
                            linkOpacity={0.8}
                            nodeColor={() => '#2EA28A'}
                            linkLabel={'label'}
                            linkWidth={2}
                            //forceEngine="d3"
                            //enableNodeDrag
                        />
                     )}
                </Grid>

            </Grid>
        </Paper>
        )
}

export default ForceGraphExample