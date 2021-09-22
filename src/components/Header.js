import React from 'react';

function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.title}</h1>
      <h4>{props.subTitle}</h4>
    </header>
  )
}

export default Header;