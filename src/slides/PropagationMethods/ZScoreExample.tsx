import { useEffect, useState } from 'react';

import normal from '@stdlib/stats/base/dists/normal';
import randn from '@stdlib/random/base/randn';
import  ones from "@stdlib/array/base/ones";
import linspace from "@stdlib/array/base/linspace"
import { Box, Slider, Stack, Zoom } from '@mui/material';
import { Data, Layout } from 'plotly.js';
import Plot from 'react-plotly.js';


const R = randn.factory({ seed: 42 })
const MASTER_SAMPLE = ones(500).map(() => R() * 2.3 + 8.0)
const MAX_X = 15
const MAX_Y = 0.3

function calculateConfidenceInterval(mean: number, stdDev: number, n: number, alpha: number): [number[], number[], number, number] {
  // calculate the x and y values for the normal distribution
  const x: number[] = linspace(0, MAX_X, 100);
  const y = x.map((xi) => normal.pdf(xi, mean, stdDev));

  // calculate the z-score for the given significance level
  const zScore = Math.abs(normal.quantile(1- alpha / 2, mean, stdDev));

  // calculate the standard error of the mean
  const stdError = stdDev / Math.sqrt(n);

  // calculate the confidence interval
  const lowerBound = mean - zScore * stdError;
  const upperBound = mean + zScore * stdError;

  return [x, y, lowerBound, upperBound];
}

const ZScoreExample: React.FC = () => {
    // component state to make up an example
    const [sampleSize, setSampleSize] = useState<number>(10)
    const [sample, setSample] = useState<number[]>([])
    
    // state to store the plot data
    const [data, setData] = useState<Partial<Data>[]>([])
    const [layout, setLayout] = useState<Partial<Layout>>({})

    // always draw a new random from the MASTERSAMPLE, when the sample size changes
    useEffect(() => {
        setSample([...MASTER_SAMPLE.slice(0, sampleSize)]);
    }, [sampleSize])

    // effect to calculate the confidence interval
    useEffect(() => {
        if (sample.length === 0) return;
        // calculate the mean and standard deviation
        const mean = sample.reduce((a, b) => a + b) / sample.length;
        const stdDev = Math.sqrt(sample.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / sample.length);

        // calculate the confidence interval
        const [x, y, lowerBound, upperBound] = calculateConfidenceInterval(mean, stdDev, sample.length, 0.05);

        // build the new plot
        const newData = [
            {   
                mode: 'lines',
                x: x,
                y: y,
                line: { color: 'blue', width: 0.6},
                fill: 'tozeroy',
                fillcolor: 'rgba(0, 0, 255, 0.2)',
            },
        ]

        // create the new layout
        const newLayout = {
            title: 'Confidence Interval',
            xaxis: {
                title: 'Sample mean',
                range: [0, MAX_X]
            },
            yaxis: {
                visible: false,
                zeroline: false,
                showgrid: false
                // title: 'Probability density',
                // range: [0, MAX_Y]
            },
            autosize: true,
            shapes: [
                {
                    type: 'line',
                    xref: 'x',
                    yref: 'y',
                    x0: lowerBound,
                    y0: 0,
                    x1: lowerBound,
                    y1: MAX_Y,
                    line: {
                        color: 'blue',
                        width: 1,
                        dash: 'dot'

                    }
                },
                {
                    type: 'line',
                    xref: 'x',
                    yref: 'y',
                    x0: upperBound,
                    y0: 0,
                    x1: upperBound,
                    y1: MAX_Y,
                    line: {
                        color: 'blue',
                        width: 1,
                        dash: 'dot'
                    }
                },
                ...sample.map(y_ => {
                    return {
                        type: 'line',
                        xref: 'x',
                        yref: 'y',
                        x0: y_,
                        y0: 0,
                        x1: y_,
                        y1: MAX_Y / 6,
                        line: {
                            color: 'red',
                            width: 0.8,
                            //dash: 'dot'
                        }
                    }
                })
            ]
        } as Layout

        // update the state
        setData(newData);
        setLayout(newLayout);
    }, [sample])

    
    return (
        <Zoom in={true}>
            <Stack spacing={3} direction="column" alignItems="center" sx={{p: 1}}>
                <Box sx={{p:2, width: '100%'}}>
                    <Slider value={sampleSize} min={10} max={500} step={10} valueLabelDisplay="auto" onChange={(_, value) => setSampleSize(value as number)} />
                </Box>
                <Plot data={data} layout={layout} style={{height: '400px'}} />
            </Stack>
        </Zoom>
    )
}

export default ZScoreExample