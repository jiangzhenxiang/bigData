import React from 'react';
import logo from './logo.svg';
import './App.css';
import RealList from "./page/realList";
import VirtualList from './page/virtualList';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div>
                <VirtualList></VirtualList>
                {/*<RealList></RealList>*/}
            </div>
        </div>
    );
}

export default App;
