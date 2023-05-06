import React from 'react';
import { RevealJS } from "@gregcello/revealjs-react";
import { HighlightPlugin, NotesPlugin } from "@gregcello/revealjs-react";
import Introduction from './chapters/Introduction';
import Software from './chapters/Software';
import Uncertainty from './chapters/Uncertainty';
import SoilMoisture from './chapters/SoilMoisture';

function App() {
  return (
    <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
      <RevealJS plugins={[HighlightPlugin, NotesPlugin]} overview slideNumber="c/t">
        
        {/* Introduction */}
        <Introduction />
        <Software />
        <Uncertainty />
        <SoilMoisture />
      </RevealJS>
    </div>
  );
}

export default App;
