import { useEffect, useRef, useState } from "react"
import { Button, CircularProgress, FormControl, Stack, TextField, Zoom } from "@mui/material"

import randn from "@stdlib/random/base/randn";
import randu from "@stdlib/random/base/randu";
import ones from "@stdlib/array/base/ones";
import linspace from "@stdlib/array/base/linspace";
import normal from "@stdlib/stats/base/dists/normal";
import { Data, Layout} from "plotly.js";
import Plot from "react-plotly.js";

// generate a random master dataset
const R = randn.factory({ seed: 42 })
const MASTER_SAMPLE = ones(50).map(() => R() * 2.3 + 8.0)

const Y_RANGE = [6, 9]

// create a function to fit a normal distribution to a sample based on stdlib
const fitNormal = (sample: number[]): [number[], number[]] => {
    // get sample mean and standard deviation
    const mean = sample.reduce((a, b) => a + b, 0) / sample.length
    const std = Math.sqrt(sample.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) / sample.length)
    
    // resolve the normal distribution at 100 locations
    const x = linspace(Y_RANGE[0], Y_RANGE[1], 100)
    const y_ = x.map(xi => normal.pdf(xi, mean, std))
    const y = y_.map(yi => yi / Math.max(...y_))
    return [x, y]
}

const MCExample: React.FC = () => {
    // component state to make up and example
    const [sigma, setSigma] = useState<number>(5.0)
    const [iteration, setIteration] = useState<number>(0)
    const [running, setRunning] = useState<boolean>(false)

    // create a state that stores the new sample means and the last sample
    //const [means, setMeans] = useState<number[]>([])
    const meansRef = useRef<number[]>([])
    const [lastSample, setLastSample] = useState<number[]>([])

    // create a state for both plots
    const [data1, setData1] = useState<Partial<Data>[]>([])
    const [data2, setData2] = useState<Partial<Data>[]>([])
    const [layout2, setLayout2] = useState<Partial<Layout>>({})


    // reset iteration if running changes
    useEffect(() => {
        if (running) {
            setData1([])
            setData2([])
            setLayout2({})
            meansRef.current = []
            setLastSample([])
            setIteration(1)
        }
        if (!running) {
            // reset
            setIteration(0)
        }
    }, [running])
    
    // listen to iteration and do one simulation step whenever iteration changes and is larger than 0
    useEffect(() => {
        // stop after 10 iterations
        if (iteration > 50) {
            setRunning(false)
            return
        }
        if (iteration > 0) {
            // do one simulation step
            const newSample = MASTER_SAMPLE.map(x => ((randu() - 0.5) * sigma) + x)
            
            // update the means
            //const newMeans = cloneDeep(means)
            meansRef.current.push(newSample.reduce((a, b) => a + b, 0) / newSample.length)
            
            // set the new state
            //setMeans(newMeans)
            setLastSample(newSample)

            // start the next step 1.4 seconds later
            setTimeout(() => setIteration(iteration + 1), iteration < 5 ? 1400 : 100)
        }
    }, [iteration, sigma])

    // effect to update the plot whenever a new sample was taken
    useEffect(() => {
        // build new plot data
        setData1([
            ...lastSample.map((x, i) => {
                return {
                    type: 'scatter',
                    x: [0.1, 0.8],
                    y: [MASTER_SAMPLE[i], x],
                    line: {color: 'blue', opacity: 0.5, width: 0.8},
                    marker: {color: 'blue', size: 6},
                    showlegend: false
                } as Partial<Data>
            })
        ])
    }, [lastSample])

    // effect to update the plot whenever a new mean was calculated
    useEffect(() => {
        // plot the new means' distribution
        const [x, y] = fitNormal(meansRef.current)
        const newData2 = [
            {
                mode: 'lines',
                x: x,
                y: y,
                line: {color: 'blue', width: 0.6},
                fill: 'tozeroy',
                fillcolor: 'rgba(0, 0, 255, 0.2)'
            }
        ]

        const newLayout2 = {
            title: 'Simulated semi-variances',
            autosize: true,
            xaxis: {range: [6, 9], title: 'Sample Mean'},
            yaxis: {range: [0, 1.0], visible: false},
            shapes: [
                ...meansRef.current.map(x => {
                    return {
                        type: 'line',
                        xref: 'x',
                        yref: 'y',
                        x0: x,
                        y0: 0,
                        x1: x,
                        y1: 0.4,
                        line: {color: 'red', width: 1, dash: 'dot'}
                    }
                })
            ]
        } as Layout


        // update the plots
        setData2(newData2)
        setLayout2(newLayout2)
    }, [lastSample])

    return (
        <Zoom in>
            <Stack spacing={3} direction="column" alignItems="center" sx={{p: 1}}>
                <Stack spacing={3} direction="row" alignContent="space-between" sx={{width: '100%'}}>
                    <FormControl fullWidth>
                        <TextField label="Observation uncertainty" type="number" value={sigma} onChange={e => setSigma(Number(e.target.value))} disabled={running} />
                    </FormControl>
                    <h3 style={{width: '60px'}}>Iter: { iteration }</h3>
                    <Button variant="contained" color="success" sx={{width: '100%', maxWidth: '250px'}} disabled={running} onClick={() => setRunning(true)}>
                        { running ? <>
                            <CircularProgress color="success" />
                            &nbsp;Running...
                        </> : 'Start MC run'}
                    </Button>
                </Stack>
                <Stack spacing={3} direction="row" alignContent="space-between" sx={{width: '100%', height: '400px'}}>
                    <Plot 
                        data={data1}
                        layout={{
                            title: 'Resampling',
                            autosize: true,
                            xaxis: {range: [0, 1], visible: false, zeroline: false},
                            yaxis: {range: [0, 20], zeroline: true, showgrid: true, title: 'Observation value'},
                            annotations: [
                                {xref: 'paper', yref: 'paper', x: 0.05, y: 0.8, text: 'observation', showarrow: false, font: {size: 12}},
                                {xref: 'paper', yref: 'paper', x: 0.95, y: 0.8, text: '  re-sample', showarrow: false, font: {size: 12}}
                            ]
                        }}
                        style={{height: '100%', width: '50%'}} 
                    />
                    <Plot data={data2} layout={layout2} style={{height: '100%', width: '50%'}} />
                </Stack>
            </Stack>
        </Zoom>
    )
}

export default MCExample