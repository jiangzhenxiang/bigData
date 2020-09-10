import React, {useEffect, useState} from 'react';
import '../App.css';


function RealList() {
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
            <div>
                <div>真实列表</div>
                <div>
                    {list.map((item, index) => {
                        const {name, text, title} = item;
                        return (
                            <div className="item" key={name}>
                                <span>{title}-{name}</span>
                                <span>:{text}</span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default RealList;
