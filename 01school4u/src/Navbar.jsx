import React from 'react'

const Navbar = (props) => {
    console.log(props.title);
    
  return (
    <div>
      <h3>Navigation Bar</h3>
      <h4>{props.title}</h4>
      <h4>{props.number}</h4>
      <h4>{props.link}</h4>
    </div>
  )
}

export default Navbar
