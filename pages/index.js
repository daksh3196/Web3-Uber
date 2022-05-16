import * as React from "react";
import Navbar from './Navbar';

const ResponsiveAppBar = () => {
  return (
    <div className="ride-app">
      <div className="ride--app-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="body-container">
          Hello
        </div>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
