import React from 'react';
import './App.css';
import Playground from "./views/playground";
import Header from "./containers/header";

function App() {
  return (
      <div className="App">
          <Header/>
          <Playground/>
      </div>
  );
}

export default App;
