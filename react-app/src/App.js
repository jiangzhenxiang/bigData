import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FixedSizeList as List} from 'react-window';

function Row({ data, index, style }) {
  console.log('data', data)
  const { name, text, title } = data[index];
  console.log('name', name)
  return (
    <div style={style} className="item">
      <span>{title}-{name}</span>
      <span>:{text}</span>
    </div>
  );
}


function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(body => {
        setList(body);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <div>
        <List
          height={200}
          itemCount={list.length}
          itemData={list}
          itemSize={35}
          width={'100%'}
        >
          {Row}
        </List>
      </div>
    </div>
  );
}

export default App;
