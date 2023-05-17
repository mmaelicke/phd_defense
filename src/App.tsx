import React from 'react';
import { RevealJS } from "@gregcello/revealjs-react";
import { HighlightPlugin, NotesPlugin } from "@gregcello/revealjs-react";
import Introduction from './chapters/Introduction';
import Software from './chapters/Software';
import Uncertainty from './chapters/Uncertainty';
import SoilMoisture from './chapters/SoilMoisture';
import Appendix from './chapters/Appendix';

function App() {
  return (
    <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
      <RevealJS plugins={[HighlightPlugin, NotesPlugin]} overview slideNumber="c/t">
        
        {/* Presentation chapters */}
        <Introduction />
        <Software />
        <Uncertainty />
        <SoilMoisture />
        <Appendix />
      </RevealJS>
    </div>
  );
}

export default App;
