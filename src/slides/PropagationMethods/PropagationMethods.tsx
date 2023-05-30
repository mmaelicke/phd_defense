import { useState } from "react";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material"
import { CandlestickChart, Loop, StackedLineChart } from "@mui/icons-material"
import ZScoreExample from "./ZScoreExample";

const PropagationMethods = () => {
    // add a state to switch the current sub-application
    const [currentApp, setCurrentApp] = useState<'z-score' | 'k-fold' | 'mc'>('z-score')

    return (
        <Grid container spacing={1}>
            
            <Grid item xs={3} sx={{height: '100%'}}>
            <Paper elevation={3} sx={{p: 0}}>
                    <List className="fragment">
                        <ListItem disablePadding>
                            <ListItemButton selected={currentApp==='z-score'} onClick={() => setCurrentApp('z-score')}>
                                <ListItemIcon>
                                    <StackedLineChart />
                                </ListItemIcon>
                                <ListItemText primary="Confidence interval" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton selected={currentApp==='k-fold'} onClick={() => setCurrentApp('k-fold')}>
                                <ListItemIcon>
                                    <CandlestickChart />  
                                </ListItemIcon>
                                <ListItemText primary="K-Fold Bootstrap" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton selected={currentApp==='mc'} onClick={() => setCurrentApp('mc')}>
                                <ListItemIcon>
                                    <Loop />
                                </ListItemIcon> 
                                <ListItemText primary="MC - Propagation" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>

            <Grid item xs={9} className="fragment" sx={{height: '500px'}}>
                { currentApp === 'z-score' ? <ZScoreExample /> : null }
            </Grid>
        </Grid>
    )
}

export default PropagationMethods