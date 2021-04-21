import React, {useState, useEffect} from 'react';
import './App.css';


const GIFS = ['https://media3.giphy.com/media/12L6wFC7gHKQ92/giphy.gif?cid=ecf05e475xqs0l7c3xnh2rufixz0uj3896kfxa5o55gi7u2q&rid=giphy.gif&ct=g',
              'https://media4.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47ay6y90v1agxve7dxl7qor7raxld2jddxmxb04u65&rid=giphy.gif&ct=g']

const DIFF_GIFS = ['https://media0.giphy.com/media/BdMRkwomqVsLm/200w.webp?cid=ecf05e47a6wzo2njud4jhn4vm2j7fgb2m7refhfvdaoh2wwm&rid=200w.webp&ct=g']
function App() {
  // useEffect(function(){
  //   console.log('effect ran');
  //   setGifs(DIFF_GIFS)
  // }, []) //component DidMount

  const [gifs, setGifs] = useState(GIFS)
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(singleGif => <img src = {singleGif}/>)
        }
        <button onClick={() => setGifs(DIFF_GIFS)}>Change gif</button> 
      </section>
    </div>
  );
}

export default App;
