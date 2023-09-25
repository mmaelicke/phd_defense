import { useEffect, useState } from "react";

import Plot from "react-plotly.js";
import { ScatterData, Data, Layout } from "plotly.js";

/** Define the contents of the Variogram statically */
import DATA from "./data/vario.json"
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch } from "@mui/material";


const BasicVariogram = () => {
    // define a state to control the plot
    const [step, setStep] = useState<string>('none');
    const [hasDescription, setHasDescription] = useState<boolean>(false);

    // create the state of the plot
    const [data, setData] = useState<Partial<Data>[]>([])
    const [layout, setLayout] = useState<Partial<Layout>>({})

    useEffect(() => {
        const newData = [{
            x: DATA.bins,
            y: DATA.experimental,
            type: 'scatter',
            mode: 'markers',
            marker: {size: 10, color: 'blue'},
            name: 'Empirical Variogram'
        } as ScatterData]

        let newLayout = {
            autosize: true,
            xaxis: {title: 'Separating distance (pixel)'},
            yaxis: {title: 'Semivariance (intensity²)'},
            legend: {orientation: 'h', yanchor: 'bottom', y: 1.02, xanchor: 'right', x: 1}
        } as Layout

        // switch the models if any
        if (step === 'gauss') {
            newData.push({
                x: DATA.modelX,
                y: DATA.modelGauss,
                type: 'scatter',
                mode: 'lines',
                marker: {size: 2, color: 'green'},
                name: 'Gaussian Model'
            } as ScatterData)

            if (hasDescription) {
                newLayout = {
                    ...newLayout, 
                    shapes: [
                        {
                            type: 'line',
                            yref: 'paper',
                            y0: 0,
                            y1: 1,
                            x0: DATA.paramsGauss[0],
                            x1: DATA.paramsGauss[0],
                            line: {color: 'black', width: 1, dash: 'dot'}
                        },
                        {
                            type: 'line',
                            xref: 'paper',
                            x0: 0,
                            x1: 1,
                            y0: DATA.paramsGauss[1],
                            y1: DATA.paramsGauss[1],
                            line: {color: 'black', width: 1, dash: 'dot'}
                        }
                    ],
                    annotations: [
                        {
                            xref: 'paper',
                            x: 0.2,
                            xanchor: 'left',
                            y: DATA.paramsGauss[1],
                            yanchor: 'bottom',
                            text: 'sill',
                            showarrow: false
                        },
                        {
                            yref: 'paper',
                            x: DATA.paramsGauss[0],
                            xanchor: 'right',
                            y: 0.1,
                            text: 'effective range',
                            showarrow: false
                        }
                    ]
                }
            }
        }

        else if (step === 'spherical') {
            newData.push({
                x: DATA.modelX,
                y: DATA.modelSph,
                type: 'scatter',
                mode: 'lines',
                marker: {size: 2, color: 'green'},
                name: 'Spherical Model'
            } as ScatterData)

            if (hasDescription) {
                newLayout = {
                    ...newLayout, 
                    shapes: [
                        {
                            type: 'line',
                            yref: 'paper',
                            y0: 0,
                            y1: 1,
                            x0: DATA.paramsSph[0],
                            x1: DATA.paramsSph[0],
                            line: {color: 'black', width: 1, dash: 'dot'}
                        },
                        {
                            type: 'line',
                            xref: 'paper',
                            x0: 0,
                            x1: 1,
                            y0: DATA.paramsSph[1],
                            y1: DATA.paramsSph[1],
                            line: {color: 'black', width: 1, dash: 'dot'}
                        }
                    ],
                    annotations: [
                        {
                            xref: 'paper',
                            x: 0.2,
                            xanchor: 'left',
                            y: DATA.paramsSph[1],
                            yanchor: 'bottom',
                            text: 'sill',
                            showarrow: false
                        },
                        {
                            yref: 'paper',
                            x: DATA.paramsSph[0],
                            xanchor: 'right',
                            y: 0.1,
                            text: 'effective range',
                            showarrow: false
                        }
                    ]
                }
            }
        }

        else if (step === 'exponential') {
            newData.push({
                x: DATA.modelX,
                y: DATA.modelExp,
                type: 'scatter',
                mode: 'lines',
                marker: {size: 2, color: 'green'},
                name: 'Exponential Model'
            } as ScatterData)

            if (hasDescription) {
                newLayout = {
                    ...newLayout, 
                    shapes: [
                        {
                            type: 'line',
                            yref: 'paper',
                            y0: 0,
                            y1: 1,
                            x0: DATA.paramsExp[0],
                            x1: DATA.paramsExp[0],
                            line: {color: 'black', width: 1, dash: 'dot'}
                        },
                        {
                            type: 'line',
                            xref: 'paper',
                            x0: 0,
                            x1: 1,
                            y0: DATA.paramsExp[1],
                            y1: DATA.paramsExp[1],
                            line: {color: 'black', width: 1, dash: 'dot'}
                        }
                    ],
                    annotations: [
                        {
                            xref: 'paper',
                            x: 0.2,
                            xanchor: 'left',
                            y: DATA.paramsExp[1],
                            yanchor: 'bottom',
                            text: 'sill',
                            showarrow: false
                        },
                        {
                            yref: 'paper',
                            x: DATA.paramsExp[0],
                            xanchor: 'right',
                            y: 0.1,
                            text: 'effective range',
                            showarrow: false
                        }
                    ]
                }
            }
        }

        // finally update the data
        setData(newData)
        setLayout(newLayout)
    }, [step, hasDescription])


    return (
        <Grid container spacing={1}>
            
            <Grid item xs={12} md={4} sx={{justifyContent: 'center'}} flexDirection="column">
                <FormControl fullWidth className="fragment custom blur">
                    <InputLabel id="variogram-model">Variogram Model</InputLabel>
                    <Select labelId="variogram-model" value={step !== 'init' ? step : 'none'} label="Variogram Model" onChange={e => setStep(e.target.value)}>
                        <MenuItem value="none">No model fitted</MenuItem>
                        <MenuItem value="gauss">Gaussian model</MenuItem>
                        <MenuItem value="spherical">Spherical model</MenuItem>
                        <MenuItem value="exponential">Exponential model</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth className="fragment custom blur" sx={{mt: 2}}>
                    <FormControlLabel label="Show parameters" control={<Switch checked={hasDescription} disabled={step==='none'} onChange={e => setHasDescription(e.target.checked)} />} />
                </FormControl>
            </Grid>
            
            <Grid item xs={12} md={8}>
            <Plot 
            data={data}
            layout={layout}
            style={{width: "100%", height: "400px"}}
            
        />
            </Grid>
        </Grid>
    )
}

export default BasicVariogram