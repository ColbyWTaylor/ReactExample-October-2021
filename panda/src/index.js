import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Panda from './Panda';

function Checkbox() {
  const [checked, setChecked] = useState(true)
  return (
    <>
    <input type="checkbox" value={checked} onChange={()=> setChecked(!checked)} />
    </>
  )
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById('root')
);