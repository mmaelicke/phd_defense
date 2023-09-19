import { H1, H2, RevealJS, Slide } from "@gregcello/revealjs-react";
import { HighlightPlugin, NotesPlugin } from "@gregcello/revealjs-react";
import { CssBaseline, Grid } from '@mui/material';

import Motivation from "./chapters/Motivation";
import Introduction from './chapters/Introduction';
import Uncertainty from './chapters/Uncertainty';
import SoilMoisture from './chapters/SoilMoisture';
import Appendix from './chapters/Appendix';

//import 'reveal.js/plugin/highlight/monokai.css'
//import 'reveal.js/plugin/highlight/zenburn.css'
//import  'reveal.js/plugin/highlight/highlight'
import Conclusion from "./chapters/Conclusion";

import 'katex/dist/katex.min.css'

function App() {

  return (
    <>
    <CssBaseline />
    <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
      <RevealJS 
        plugins={[HighlightPlugin, NotesPlugin ]} 
        overview 
         slideNumber="c/t"
        // slideNumber={slide =>  {console.log(slide); return `4`}}
        hash
        autoAnimateDuration={1.4}
        controlsTutorial={false}

      >
        
        {/* Title slide */}
        <Slide autoAnimate>
            <Grid container spacing={0} className="justify-col" sx={{height: '100vh'}}>
                <Grid item xs={12} className="justify-row">
                    <img src="img/logo_kit.png" alt="KIT logo" style={{maxHeight: '170px'}} />
                    <span />
                </Grid>
                <Grid item xs={12}>
                    <H1>
                        From method development to software integration: A comprehensive approach to geostatistical uncertainty
                    </H1>
                    <H2 style={{marginTop: '5rem'}}>PhD Defense by Mirko Mälicke</H2>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>

            <aside className="notes">
              <p>Welcome to my PhD defense presentation, titled 'From method development to software integration: A comprehensive approach to geostatistical uncertainty.' In the next 30 minutes...</p>
            </aside>
        </Slide>
        
        {/* Presentation chapters */}
        <Motivation />
        <Introduction />
        <Uncertainty />
        <SoilMoisture />
        {/* <Software /> */}
        <Conclusion />
        <Appendix />
      </RevealJS>
    </div>
    </>
  );
}

export default App;
