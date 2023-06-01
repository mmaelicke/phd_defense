import randn from "@stdlib/random/base/randn";
import ones from "@stdlib/array/base/ones";
import { useEffect, useRef, useState } from "react";
import { Data, Layout } from "plotly.js";
import { Box, Button, Slider, Stack, Typography, Zoom } from "@mui/material";
import Plot from "react-plotly.js";

// generate a random master dataset
const generateSample = (seed: number): number[] => {
    const R = randn.factory({ seed })
    return ones(500).map(() => R() * 2.3 + 8.0)
}

const KFoldExample: React.FC = () => {
    // state to construct the folds
    const [folds, setFolds] = useState<number>(7)
    const [foldIndex, setFoldIndex] = useState<number>(99)

    // store the Masterdata
    const DATAREF = useRef<number[]>(generateSample(42))

    // set the state to store the means and always remeber the last mean
    const meansRef = useRef<number[]>([])
    const [lastMean, setLastMean] = useState<number | undefined>()

    // state to control the simulation
    const [running, setRunning] = useState<boolean>(false)
    const [simIndex, setSimIndex] = useState<number>(42)
    
    // state to store the plot data
    const [data, setData] = useState<Partial<Data>[]>([])
    const [layout, setLayout] = useState<Partial<Layout>>({})

    // reset the index, when the number of folds changes
    useEffect(() => {
        // set the fold index to 99
        setFoldIndex(99)

        // reset the means
        meansRef.current = []
        setLastMean(undefined)
    }, [folds])

    const onStartSimulation = () => {
        // reset the means
        setLastMean(undefined)
        meansRef.current = []

        // start the simulation
        setRunning(true)
        setFoldIndex(0)
    }

    // control the simulation
    useEffect(() => {
        if (!running) return
        if (foldIndex < folds) {
            // set a timeout of 1 second to run increase the fold index
            setTimeout(() => setFoldIndex(foldIndex + 1), simIndex === 42 ? 1000 : 50)
        } else if (simIndex < 52) {
            // generate a new sample
            DATAREF.current = generateSample(simIndex + 1)

            // increase the simulation index
            setSimIndex(simIndex + 1)

            // reset the fold index in a timeout
            setTimeout(() => setFoldIndex(0), 50)
        } else if (simIndex === 52) {
            setRunning(false)
            setSimIndex(42)
        }
        else {
            // simulation is finished
            setRunning(false)
        }
    }, [foldIndex, folds, running])

    // when the fold index changes, calculate the mean of the respective fold
    useEffect(() => {
        // get the data slice
        const slice = DATAREF.current.slice(foldIndex * Math.floor(DATAREF.current.length / folds), (foldIndex + 1) * Math.floor(DATAREF.current.length / folds))

        // push the mean to the array
        const foldMean = slice.reduce((a, b) => a + b, 0) / slice.length
        meansRef.current.push(foldMean)

        // save the last mean
        setLastMean(foldMean)
    }, [foldIndex, folds])

    // update the plot, whenever a new mean was calculated
    useEffect(() => {
        // only update, if the simulation has not been resetted
        if (lastMean) {
            setData([
                ...meansRef.current.map((mean, i) => {
                    return {
                        mode: 'lines',
                        x: [mean, mean],
                        y: [0, 1.0],
                        line: {color: 'rgba(0, 0, 155, 0.8)', width: 0.6},
                        showlegend: false,
                        hovertemplate: `Fold ${i + 1}: %{x:.2f}<extra></extra>`
                    }
                }),
                {
                    mode: 'lines',
                    x: [lastMean, lastMean],
                    y: [0, 1.1],
                    line: {color: 'rgba(0, 0, 155, 1)', width: 3.6},
                    showlegend: false,
                    hovertemplate: 'Last Fold: %{x:.2f}<extra></extra>'
                }
            ])

            const layout = {
                autosize: true,
                xaxis: {range: [6, 9], title: 'Sample Mean', visible: true},
                yaxis: {range: [0, 1.3], visible: false}
            } as Partial<Layout>

            if (meansRef.current.length > 3) {
                layout['shapes'] = [{
                        type: 'rect',
                        xref: 'x',
                        yref: 'y',
                        x0: [...meansRef.current, lastMean].sort()[Math.floor(meansRef.current.length * 0.1)],
                        y0: 0,
                        x1: [...meansRef.current, lastMean].sort()[Math.floor(meansRef.current.length * 0.9)],
                        y1: 1.05,
                        line: { width: 0 },
                        fillcolor: 'rgba(255, 0, 0, 0.3)',
                    }]
            }
            setLayout(layout)
        } else {
            setData([])
        }
    }, [lastMean])

    return (
        <Zoom in>
            <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={3} sx={{ml: 2}} className="fragment" data-fragment-index="5">
                    <Button variant="contained" color="inherit" sx={{maxWidth: '150px'}} disabled={foldIndex === 99 || running} onClick={() => setFoldIndex(99)}>RESET</Button>
                    <Slider value={folds} min={3} max={12} marks={[{label: '3', value: 3}, {label: '5', value: 5}, {label: '7', value: 7}, {label: '10', value: 10}]} onChange={(_, value) => setFolds(value as number)} disabled={running} valueLabelFormat="auto" />
                    <Button variant="contained" color="success" sx={{maxWidth: '150px'}} disabled={running} onClick={onStartSimulation}>SIMULATE</Button>
                </Stack>
            
                <Stack direction="row" spacing={3}>
                    <Stack direction="column" spacing={0} sx={{ml: 2}} className="fragment" data-fragment-index="3">
                        
                        {[...Array(folds)].map((_, i) => {
                            return (
                            <Box key={i}
                                sx={{
                                    height: `${1 / folds * 100}%`, 
                                    width: '50px',
                                    border: foldIndex === i ? '1px solid red' : '1px solid rgb(46, 162, 138)', //46 162 138
                                    backgroundColor: foldIndex === i ? 'rgba(255, 0, 0, 0.2)' : 'rgba(46, 162, 138, 0.4)',
                                    '&:hover': {
                                        cursor: 'pointer',
                                        boxShadow: foldIndex === i ? '0px 0px 6px 3px rgba(255, 0, 0, 0.5)' : '0px 0px 6px 2px rgba(46, 162, 138, 0.3)'
                                    },
                                    borderRadius: i === 0 ? '0px 5px 0px 0px' : i === folds - 1 ? '0px 0px 0px 5px' : '0px',
                                    transition: simIndex === 42 ? 'all 0.3s ease-in-out' : 'none'
                                }}
                                onClick={() => setFoldIndex(i)}
                            />)
                        })}
                    </Stack>
                    <Stack direction="column" spacing={2} sx={{width: '100%'}} alignItems="start" className="fragment" data-fragment-index="4">
                        <Plot 
                            data={data}
                            layout={layout}
                            style={{height: '400px'}}
                        />
                    </Stack>
                </Stack>

            </Stack>
        </Zoom>
    )
}

export default KFoldExample