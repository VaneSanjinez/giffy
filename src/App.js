import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './services/getGifs';




function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(function(){
    getGifs({keyword : 'rugrats'}).then(gifs => setGifs(gifs))
   
  }, []) 


  return (
    <div className="App">
      <section className="App-content">
        { 
          gifs.map(singleGif => {
            return <div>
                <h4> {singleGif.title}</h4>
                <small>{singleGif.id}</small>
                <img alt = {singleGif.title}src = {singleGif.url}/>
            </div>
          })
    }
      </section>
    </div>
  );
}
export default App;
