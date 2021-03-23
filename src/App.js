import {useState, useEffect } from 'react';

import Preview from './components/preview/Preview';
import Generator from './components/Generator';
import Menu from './components/menu/Menu';
import Name from './components/Name';


import './App.css';

function App() {
  const [state, setState] = useState({
    name: "Super Bubble Tea",
    font: 0,

    colTea: 0,
    colGoblet: 0,
    colBubble: 0,

    size: "50%",

    showTea: true,
    showGoblet: true,
    showBubble: true,

    showSmile: true,
    showPaille: false,
  });

  const tea = ['#FE8261', '#9A5B46', '#9DBEA2'];
  const goblet = ['#FF00CC', '#00FF33', '#3300FF'];
  const bubble = ['#8F3939', '#FFCE9F', '#3A3B59'];
  const fonts = ["PT Sans", "Lobster", "Roboto", "Ranchers"];

  return (
    <div className="App">
      <main className="main_container">
        <div className="box">
          <div className="d-flex d-row">
            <div className="d-flex d-column">
              <Preview 
                {...state} 
                colorTea={tea[state.colTea]}
                colorGoblet={goblet[state.colGoblet]}
                colorBubble={bubble[state.colBubble]}
              />
              <Name name={state.name} font={fonts[state.font]}/>
              <Menu state={state} handlerState={setState} />
            </div>
            <Generator 
              state={state} 
              handlerState={setState} 
              colorsTea={tea}
              colorsGoblet={goblet}
              colorsBubble={bubble}
              fonts={fonts}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
