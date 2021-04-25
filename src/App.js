import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import {Route} from 'wouter';



function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Route path = "/gif/:keyword" 
        component= {ListOfGifs}/>
        {/* <ListOfGifs keyword='morty'/> */}
      </section>
    </div>
  );
}
export default App;
