import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import {Link, Route} from 'wouter';



function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'> Gifs de pandas </Link>
        <Link to='/gif/perros'> Gifs de perros </Link>
        <Link to='/gif/Rick'> Gifs de Rick </Link>
        <Link to='/gif/Morty'> Gifs de Morty </Link>
        <Link to='/gif/friends'> Gifs de friends </Link>
        <Route path = "/gif/:keyword" 
        component= {ListOfGifs}/>
        {/* <ListOfGifs keyword='morty'/> */}
      </section>
    </div>
  );
}
export default App;
