import React, {useState} from 'react';

import '../styles/Generator.css';

const Generator = ({state, handlerState, colorsTea, colorsGoblet, colorsBubble, fonts}) => {
  const [size, setSize] = useState(state.size);

  const [activeBubbleColor, setActiveBubbleColor] = useState(0);
  const [activeTeaColor, setActiveTeaColor] = useState(0);
  const [activeGobletColor, setActiveGobletColor] = useState(0);

  const [activeSmile, setActiveSmile] = useState(state.showSmile);
  const [activePaille, setActivePaille] = useState(state.showPaille)

  const colBubbles = ['#8F3939', '#FFCE9F', '#3A3B59'];
  const colGoblets = ['#FF00CC', '#00FF33', '#3300FF'];

  const {name, goblet} = state;

  const handlerChange = (e) => {
    const { name, type } = e.target;
    console.log(e.target.value)
    if(name=== "taille") {
      setSize(e.target.value);
      handlerState({
        ...state,
        size: size * 10 + "%"
      })
    } else if (name === 'fonts'){
      setSize(e.target.value);
      handlerState({
        ...state,
        font: e.target.value
      })
    } else if (name === 'smile') {

      setActiveSmile(!activeSmile);
      handlerState({
        ...state,
        showSmile: !state["showSmile"]
      })
    } else {
      setActivePaille(!activePaille);
      handlerState({
        ...state,
        showPaille: !state["showPaille"]
      })
    }
  }

  const clickColor = (e, index, target) => {
    e.preventDefault();
    
    console.log(index);
    console.log(target);

    if(target === 'bubble') {
      setActiveBubbleColor(index);
      handlerState({
        ...state,
        colBubble: index
      })
    } else if(target === 'tea') {
      setActiveTeaColor(index);
      handlerState({
        ...state,
        colTea: index
      });
    } else {
      setActiveGobletColor(index);
      handlerState({
        ...state,
        colGoblet: index
      })
    }
  }

  return (

    <div id="generator">
      <h2>BUBBLE TEA GENRATOR</h2>
      {/* SECTION INPUT FOR NAME & FONT */}
      <div className="inputs-section">
        <div className="input-grp">
          <label className="input-label">Nom:</label>
          <input type="text" name="name"
            value={
              state["name"]
            }
            onChange={
              (e, state) => {
                handlerState({
                  ...state,
                  name: `${
                    e.target.value
                  }`
                })

              }
            }/>
        </div>
        <div className="input-grp">
          <label htmlFor="fonts" className="input-label">Polices</label>
          <select 
            id="fonts" 
            name="fonts"
            onChange={
              (e) => {
                handlerChange(e)
              }
            }
          >
          {fonts.map((font, index) => {
            return <option key={index} value={index}>{font}</option>
          })}
          </select>
        </div>
      </div>
      {/* END SECTION */}

      {/* SECTION INPUT SET SIZE */}
      <div className="inputs-section">
        <div className="input-grp">
          <label for="taille" className="input-label">Taille</label>
          <input type="range" id="taille" name="taille"
            value={size}
            onChange={
              (e) => {
                handlerChange(e)
              }
            }
            min="1"
            max="10"/>
        </div>
      </div>
      {/* END SECTION */}

      {/* SECTION INPUT FOR SET COLORS */}
      <div className="inputs-section">
        <div className="input-grp">
          <label htmlFor="bubbleColor" className="input-label">Goblet</label>
          <div className="pickcolors">
            {
            colGoblets.map((col, index) => {
              return (
                <div 
                  key={index}
                  className={activeGobletColor === index ? "picker active" : "picker"}
                  onClick={(e) => {clickColor(e, index, 'goblet')}}
                >
                  <div className="block-color" style={
                    {
                      backgroundColor: colGoblets[index],
                    }}>
                  </div>
                </div>
              )
            })
          }
          </div> 
        </div>

        <div className="input-grp">
          <label htmlFor="bubbleColor" className="input-label">Tea</label>
          <div className="pickcolors">
            {
            colGoblets.map((col, index) => {
              return (
                <div 
                  key={index}
                  className={activeTeaColor === index ? "picker active" : "picker"}
                  onClick={(e) => {clickColor(e, index, 'tea')}}
                >
                  <div className="block-color" style={
                    {
                      backgroundColor: colorsTea[index],
                    }}>
                  </div>
                </div>
              )
            })
          }
          </div> 
        </div>

        <div className="input-grp">
          <label htmlFor="bubbleColor" className="input-label">Tapioca</label>
          <div className="pickcolors">
            {
            colBubbles.map((col, index) => {
              return (
                <div 
                  key={index}
                  className={activeBubbleColor === index ? "picker active" : "picker"}
                  onClick={(e) => {clickColor(e, index, 'bubble')}}
                >
                  <div className="block-color" style={
                    {
                      backgroundColor: colBubbles[index],
                    }}>
                  </div>
                </div>
              )
            })
          } 
          </div>
        </div>

      </div>
      {/* END SECTION */}

      {/* SECTION SHOW SMILE OR PAILL*/}
      <div className="inputs-section">
        <div className="input-grp">
          <label className="input-label">Paille</label>
          <input type="checkbox" name="paille" value={activePaille} checked={state.showPaille} 
            onChange={(e) => {handlerChange(e)}}
          />
        </div>
        <div className="input-grp">
          <label className="input-label">Smile</label>
          <input 
            type="checkbox" value={activeSmile} checked={state.showSmile} name="smile" 
            onChange={(e) => {handlerChange(e)}}
            

            />
        </div>
      </div>
    </div>
  )
}

export default Generator