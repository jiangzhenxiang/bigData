import React, {useEffect, useState} from 'react';
import '../App.css';


function AsyncRenderList() {
    const [list, setList] = useState([]);
    const [asyncList, setAsyncList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(body => {
                setList(body);
            })
    }, [])

    useEffect(() => {
        let index = 0;
        let total = list.length;
        function load() {
            index += 50;
            if (index < total) {
                // requestAnimationFrame(() => {
                //     let temp = list.slice(index, index + 50);
                //     setAsyncList((asyncList) => [...asyncList, ...temp])
                //     load();
                // })
                setTimeout(() => {
                    let temp = list.slice(index, index + 50);
                    setAsyncList((asyncList) => [...asyncList, ...temp])
                    load();
                },0)
            }
        }
        load();
    }, [list])

    return (
        <div className="App">
            <div>
                <div>异步渲染列表</div>
                <div>
                    {asyncList.map((item, index) => {
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

export default AsyncRenderList;
