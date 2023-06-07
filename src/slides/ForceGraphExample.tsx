import { Grid, Paper } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { ForceGraph3D } from 'react-force-graph'

import './ForceGraphExample.css'

// generate some sample data
const SAMPLE = {
    nodes: [{id: "1"}, {id: "2"}, {id: "3"}, {id: "4"}],
    links: [
        {source: "1", target: "2", distance: 10}, {source: "2", target: "3", distance: 30}, {source: "3", target: "1", distance: 20},
        {source: "1", target: "4", distance: 100}, {source: "3", target: "4", distance: 50}
    ]
}

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
}

const ForceGraphExample = () => {
    // get a reference to the Paper
    const containerRef = useRef<HTMLDivElement>(null)

    // get a reference to the Graph
    const graphRef = useRef<any>(null)
    
    // state for graph data
    const [nodes, setNodes] = useState<Node[]>(SAMPLE.nodes)
    const [links, setLinks] = useState<Link[]>(SAMPLE.links)


    // adjust the distance and stregth of the links, when links change
    useEffect(() => {
        if (graphRef.current) {
            //graphRef.current.d3Force('charge', () => 0.1);
            (graphRef.current).d3Force('link')
                .distance((link: Link) => link.distance || 5)
                //.strength((link: Link) => link.strength || 0.1)
                //.iterations(() => 100)
        }
    }, [links])

    // render
    return (
        <Paper elevation={3} sx={{p: 1}}>
            <Grid container>
                
                <Grid item xs={4}>
                    <h3>Nodes</h3>
                </Grid>
                
                <Grid item xs={8} component="div" ref={containerRef}>
                    <ForceGraph3D
                        ref={graphRef} 
                        graphData={{nodes, links}} 
                        nodeVal="value"
                        height={450} 
                        width={containerRef.current ? containerRef.current.clientWidth : 400}
                        backgroundColor="white" 
                        linkColor={() => 'rgb(0,0,0)'} 
                        nodeColor={() => '#2EA28A'} 
                        linkWidth={2}
                        forceEngine="d3"
                        
                    />
                </Grid>

            </Grid>
        </Paper>
        )
}

export default ForceGraphExample