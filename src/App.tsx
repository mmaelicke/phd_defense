import { RevealJS } from "@gregcello/revealjs-react";
import { HighlightPlugin, NotesPlugin } from "@gregcello/revealjs-react";
import { CssBaseline } from '@mui/material';

import Title from "./slides/Title";
import Motivation from "./chapters/Motivation";
import Introduction from './chapters/Introduction';
import Uncertainty from './chapters/Uncertainty';
import Software from './chapters/Software';
import Conclusion from "./chapters/Conclusion";
import Appendix from './chapters/Appendix';

// import KaTeX css
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
        <Title />

        {/* Presentation chapters */}
        <Motivation />
        <Introduction />
        <Uncertainty />
        <Software />
        <Conclusion />
        <Appendix />
      </RevealJS>
    </div>
    </>
  );
}

export default App;
