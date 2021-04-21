import React, {useState, useEffect} from 'react';
import './App.css';


const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=2AVXCSVVGMc70DwnTcdX2NXPXMrg9Wth&q=panda&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(function(){
    console.log('effect ran');
    fetch(apiUrl)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        console.log(gifs)
        setGifs(gifs)
      })
  }, []) //component DidMount


  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src = {singleGif}/>)
        }
      </section>
    </div>
  );
}

export default App;
