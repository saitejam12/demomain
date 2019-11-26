import React from "react";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>How To Demo.me</p>
      </header>
      <div className='App-Body-1'>
        <img src={require("./aa.png")} alt='apparition' />
        <div>
          <p>
            its <b>MY</b> demo website
          </p>
          <p>YEAH, its incomplete just like this Ancient Apparition</p>
        </div>
      </div>
      <div className='App-Body-2'>
        <img src={require("./drow.png")} alt='drow' />
        <div>
          <p>Currently Demoing howdoiplay.com</p>
        </div>
      </div>
      <div className='App-Body-3'>
        <div>
          <p>This content originally belongs to this guy here -></p>

          <p>Click on Him to go see the original -></p>
        </div>
        <a href='https://howdoiplay.com' target='blank'>
          <img src={require("./tsunami.png")} alt='tsunami643' />
        </a>
      </div>
    </div>
  );
}

export default App;
