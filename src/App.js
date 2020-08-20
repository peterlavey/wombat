import React from 'react';
import './App.css';
import Playground from "./views/playground";
import Header from "./containers/header";
import {RootProvider} from "./context/RootProvider";

function App() {
  return (
      <div className="App">
          <RootProvider value={{}}>
              <Header/>
              <Playground/>
          </RootProvider>
      </div>
  );
}

export default App;
