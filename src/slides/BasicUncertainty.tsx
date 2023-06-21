import { FormControl, Grid, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Data, Layout, ScatterData } from "plotly.js"
import Plot from "react-plotly.js"

// statically import DATA
import DATA from './data/uncertainty.json'

const MARKS = [
    {value: 30, label: '30'},
    {value: 50, label: '50'},
    {value: 100, label: '100'},
    {value: 300, label: '300'}
]

const BasicUncertainty: React.FC = () => {
    // component state for changing the figure
    const [sampleSize, setSampleSize] = useState<'30' | '50' | '100' | '300'>('30')
    const [method, setMethod] = useState<'z-score' | 'k-fold' | 'mc'>('k-fold')

    // create the state of the plot
    const [data, setData] = useState<Partial<Data>[]>([])
    const [layout, setLayout] = useState<Partial<Layout>>({})

    // effect to create the figure
    useEffect(() => {
        // build the new dataset
        const newData = [
            {
                mode: 'lines',
                x: DATA[`${sampleSize}`]['bins'] as number[],
                y: DATA[`${sampleSize}`][method].map(tup => tup[0]) as number[],
                fill: 'none',
                line: {color: 'gray'},
                showlegend: false
            } as ScatterData,
            {
                mode: 'lines',
                x: DATA[`${sampleSize}`]['bins'] as number[],
                y: DATA[`${sampleSize}`][method].map(tup => tup[1]) as number[],
                fill: 'tonexty',
                line: {color: 'gray'},
                name: '95% uncertainty band'
            } as ScatterData,
        ]

        // build the layout
        const newLayout = {
            title: `${method} uncertainty propagation`,
            autosize: true,
            xaxis: {title: 'Separating distance (m)'},
            yaxis: {title: 'Semivariance (bit)'},
            legend: {orientation: 'h', yanchor: 'bottom', y: 1.02, xanchor: 'right', x: 1}
        } as Layout

        // finally update the state
        setData(newData)
        setLayout(newLayout)

    }, [sampleSize, method])

    return (
        <Grid container spacing={3}>
            
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <Typography id="sample-size-slider">Sample Size</Typography>
                    <Slider defaultValue={Number(sampleSize)} marks={MARKS} step={null} min={10} max={300} onChangeCommitted={(_, val) => setSampleSize(`${val}` as '30' | '50' | '100' | '300')}/>
                </FormControl>
            </Grid>
            
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel id="propagation-method">Propagation Method</InputLabel>
                    <Select labelId="propagaion-method" label="Propagation Method" value={method} onChange={(e) => setMethod(e.target.value as 'z-score' | 'k-fold' | 'mc')}>
                        <MenuItem value="k-fold">K-fold bootstrap</MenuItem>
                        <MenuItem value="z-score">Conf. Interval</MenuItem>
                        <MenuItem value="mc">Monte Carlo</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            
            <Grid item xs={12}>
                <Plot 
                    data={data}
                    layout={layout} 
                    style={{width: '100%', height: '400px'}}
                />
            </Grid>

        </Grid>
    )
}

export default BasicUncertainty