import React from "react";
import "../App.css";

const Header = props => {
  return (
    <header className="App-header">
      <span>
        <img src={props.logo} className="App-logo" alt="logo" />
        <span children={props.appTitle} className="App-title" />
      </span>
    </header>
  );
};
export default Header;
