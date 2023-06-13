import { useEffect } from 'react';
import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes'
//import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
//import 'reveal.js/dist/theme/white.css'


import Introduction from './chapters/Introduction';
import Software from './chapters/Software';
import Uncertainty from './chapters/Uncertainty';
import SoilMoisture from './chapters/SoilMoisture';
import Appendix from './chapters/Appendix';

import { Box, CssBaseline } from '@mui/material';


function App() {
  //const [deck, setDeck] = []
  useEffect(() => {
    let deck = new Reveal({
      plugins: [ Notes ],
      slideNumber: 'c/t',
      hash: true,
      autoAnimateDuration: 1.4,
    })
    
    deck.initialize()
  }, [])

  return (
    <>
    <CssBaseline />
    <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
      <Box component="div" className="reveal">
        <div className="slides">
          {/* Presentation chapters */}
          <Introduction />
          <Software />
          <Uncertainty />
          <SoilMoisture />
          <Appendix />
        </div>
      </Box> 
    </div>
    </>
  );
}

export default App;
