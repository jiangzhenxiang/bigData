import React from 'react';
import './App.css';
import RealList from "./page/realList";
import VirtualList from './page/virtualList';
import AsyncRenderList from "./page/asyncRender";
function App() {

    return (
        <div className="App">
            <div>
                {/*<VirtualList></VirtualList>*/}
                {/*<RealList></RealList>*/}
                <AsyncRenderList></AsyncRenderList>
            </div>
        </div>
    );
}

export default App;
