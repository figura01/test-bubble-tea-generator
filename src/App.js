import {useState, useEffect } from 'react';

import Preview from './components/preview/Preview';
import Generator from './components/Generator';
import Menu from './components/menu/Menu';

import './App.css';

function App() {
  const [state, setState] = useState({
    name: "",

    colTea: 0,
    colGoblet: 0,
    colBubble: 0,

    size: "50%",

    showTea: true,
    showGoblet: true,
    showBubble: true,
  });

  const tea = ['#FE8261', '#9A5B46', '#9DBEA2'];
  const goblet = ['#FF00CC', '#00FF33', '#3300FF'];
  const bubble = ['#8F3939', '#FFCE9F', '#3A3B59'];

  return (
    <div className="App">
      <main className="main_container">
        <div className="box">
          <div className="d-flex d-row">
            <div className="d-flex d-column">
              <Preview {...state} />
              <Menu {...state} handlerState={setState} />
            </div>
            <Generator 
              state={state} 
              handlerState={setState} 
              colorsTea={tea}
              colorsGoblet={goblet}
              colorsBubble={bubble}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
