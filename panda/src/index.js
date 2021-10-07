import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';
// List of available APIs: https://github.com/public-apis/public-apis
function StarWarsCharacter({}) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://api.coinbase.com/v2/currencies')
  .then(response => response.json())
  .then(setData)
  .then(json => console.log(json)).catch(console.error)
  },[])

  return data ? <h1>data acquired</h1> : "not acquired"
}

function App() {
  return <StarWarsCharacter  />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);