import { Grid } from "@mui/material"
import Plot from "react-plotly.js"

const RainfallKriging: React.FC = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Plot 
                    data={[
                        {   
                            x: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                            y: [1, 5, 2, 3, 4, 7, 3, 4, 4, 4, 7, 8, 3, 9, 9, 9, 14, 25, 14, 21, 26, 29, 20],
                            type: 'bar',
                            name: '# of Publications'
                        }
                    ]}
                    layout={{
                        title: "Peer-reviewed publications, tagged 'rainfall' & 'kriging', 2000 - 2022",
                        autosize: true,
                        xaxis: {title: 'Year of Publication'},
                        yaxis: {title: 'Number of Publications'},
                    }}
                    style={{width: '100%', height: '400px'}}
                />
            </Grid>
        </Grid>
    )
}

export default RainfallKriging