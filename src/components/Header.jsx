import React from 'react'

function Header(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.Mobile}</h1>
    </div>
  )
}

export default Header