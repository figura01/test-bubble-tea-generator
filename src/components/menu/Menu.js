import React, {useState} from 'react'
import { ReactComponent as IconTea } from "./icon_tea.svg";
import { ReactComponent as IconBubble } from './icon_bubble.svg';
import { ReactComponent as IconGoblet } from './icon_goblet.svg';

import "../../styles/Menu.css";

const Menu = ({ state, handlerState}) => {

 
  
  const [activeTea, setActiveTea] = useState(true);
  const [activeGoblet, setActiveGoblet] = useState(true);
  const [activeBubble, setActiveBubble] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();

    const { name } =  e.target;

    if(name === "tea") {
      setActiveTea(!activeTea);
      handlerState({
        ...state,
        showTea: !activeTea
      })
    } else if (name === 'goblet') {
      setActiveGoblet(!activeGoblet);
      handlerState({
        ...state,
        showGoblet: !activeGoblet
      })
    } else {
      setActiveBubble(!activeBubble);
      handlerState({
        ...state,
        showBubble: !activeBubble
      })
    }
  }


  return (
    <div className="menu">
      <ul className="menu-list">

        <li className="menu-list-item">
          <button 
            type="button" 
            name="tea"
            className={activeTea ? 'btn btn-menu active' : 'btn btn-menu'}
            onClick={(e) => {handleClick(e)}}
          >
          </button>
          <div className="block-btn">
            <IconTea className="icon" />
          </div>
        </li>

        <li className="menu-list-item">
          <button 
            type="button" 
            name="goblet"
            className={activeGoblet ? 'btn btn-menu active' :'btn btn-menu' }
            onClick={(e) => {handleClick(e)}}
          >
          </button>
          <div className="block-btn">
            <IconGoblet className="icon" />
          </div>
        </li>

        <li className="menu-list-item">
          <button
            name="bubble"
            className={activeBubble ? 'btn btn-menu active' : 'btn btn-menu'}
            onClick={(e) => {handleClick(e)}}
            type="button"  
          >
            
          </button>
          <div className="block-btn">
            <IconBubble
              className="icon"
             
            />
          </div>
          
        </li>

      </ul>
      
    </div>
  )
}

export default Menu;