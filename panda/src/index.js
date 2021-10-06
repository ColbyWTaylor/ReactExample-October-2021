import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';

function GitHubUser() {
  const [data,setData] = useState(null);
  useEffect(()=> {
    fetch(`https://api.github.com/users/{login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  })

  if (data) return <p>{JSON.stringify(data)}</p>
  return null 
}

function App() {
return <GitHubUser login="colbywtaylor"/>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);