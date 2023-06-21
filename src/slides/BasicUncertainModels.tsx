import { useEffect, useState } from "react"
import { FormControl, Grid, InputLabel, MenuItem, Select, Slider } from "@mui/material";
import { Data, Layout, ScatterData } from "plotly.js";
import Plot from "react-plotly.js";

// statically import DATA
import DATA from "./data/uncertain_models.json"
import UNC from "./data/uncertainty.json"
const INTV_BINS = UNC['100']['bins'] as number[]
const INT_BOUNDS = UNC['100']['k-fold'] as number[][]

// extract the BINS from DATA
const BINS = DATA['x'] as number[]

// define the models lookup
const MODELS = {
    'exponential': 'Exponential',
    'gaussian': 'Gaussian',
    'spherical': 'Spherical'
}

// define the model functions
function spherical(r: number, range: number, sill: number, nugget: number = 0.0): number {
    if (r <= range) {
        return nugget + sill * (1.5 * (r / range) - 0.5 * Math.pow(r / range, 3));
    } else {
        return nugget + sill;
    }
}

function exponential(r: number, range: number, sill: number, nugget: number = 0.0): number {
    return nugget + sill * (1 - Math.exp(-3 * r / range));
}

function gaussian(r: number, range: number, sill: number, nugget: number = 0.0): number {
    return nugget + sill * (1 - Math.exp(-3 * Math.pow(r / range, 2)));
}

const MODEL_FUNC = {
    'exponential': exponential,
    'gaussian': gaussian,
    'spherical': spherical
}


const BasicUncertainModels: React.FC = () => {
    // component state for changing the figure
    const [range, setRange] = useState<number>(BINS.reduce((a, b) => a + b) / BINS.length)
    const [sill, setSill]  = useState<number>(1500)
    const [model, setModel] = useState<'exponential' | 'gaussian' | 'spherical'>('exponential')

    // create the state of the plot
    const [data, setData] = useState<Partial<Data>[]>([])
    const [layout, setLayout] = useState<Partial<Layout>>({})

    // effect to create the figure
    useEffect(() => {
        // build the new dataset
        const newData = [
            {
                mode: 'lines',
                x: INTV_BINS,
                y: INT_BOUNDS.map(t => t[0]),
                fill: 'none',
                line: {color: 'gray'},
                showlegend: false
            } as ScatterData,
            {
                mode: 'lines',
                x: INTV_BINS,
                y: INT_BOUNDS.map(t => t[1]),
                fill: 'tonexty',
                line: {color: 'gray'},
                name: '95% uncertainty band'
            } as ScatterData,
        ]

        // push all predefined models to the plot
        DATA['models'].forEach((y: number[]) => {
            newData.push({
                mode: 'lines',
                x: BINS,
                y: y,
                line: {color: 'green', width: 0.6},
                showlegend: false
            } as ScatterData)
        })

        // calculate the current model
        const modelFunc = MODEL_FUNC[model]
        const modelData = BINS.map((x: number) => modelFunc(x, range, sill))

        // add to the plot
        newData.push({
            mode: 'lines',
            x: BINS,
            y: modelData,
            line: {color: 'red', width: 2},
            name: `${MODELS[model]} (r=${range.toFixed(0)}, s=${sill.toFixed(0)}))`
        } as ScatterData)

        // create the layout
        const newLayout = {
            autosize: true,
            xaxis: {title: 'Distance (m)'},
            yaxis: {title: 'Semivariance (bit)'},
            legend: {orientation: 'h', yanchor: 'top', y: 1.2}
        } as Layout

        // finally set the new data
        setData(newData)
        setLayout(newLayout)
    }, [range, sill, model])

    return (
        <Grid container spacing={3} sx={{width: 'inherit'}}>

            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="model-label">Theoretical Model</InputLabel>
                    <Select labelId="model-label" label="Theoretical Model" value={model} onChange={e => setModel(e.target.value as 'spherical' | 'gaussian' | 'exponential')}>
                        <MenuItem value="spherical">Spherical Model</MenuItem>
                        <MenuItem value="exponential">Exponential Model</MenuItem>
                        <MenuItem value="gaussian">Gaussian Model</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={1} sx={{py: 5}}>
                <Slider orientation="vertical" defaultValue={sill} min={0} max={2000} onChange={(e, value) => setSill(value as number)} valueLabelDisplay="auto" />
            </Grid>
            <Grid item xs={11}>
                <Plot
                    data={data}
                    layout={layout}
                    style={{width: '100%', height: '400px'}}
                />
            </Grid>
            <Grid item xs={12} sx={{px: 5}}>
                <Slider defaultValue={range} min={10} max={350} onChange={(e, value) => setRange(value as number)} valueLabelDisplay="auto" />
            </Grid>

        </Grid>
    )
}

export default BasicUncertainModels