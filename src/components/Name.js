import React from 'react'
import '../styles/Name.css';

const Name = ({name, font}) => {
  return (
    <div className="name">
      <p style={{fontFamily: font}}>{name}</p>
    </div>
  )
}

export default Name
