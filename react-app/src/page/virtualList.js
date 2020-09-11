import React, {useEffect, useState} from 'react';
import {FixedSizeList as List} from 'react-window';

function Row({data, index, style}) {
    const {name, text, title} = data[index];
    return (
        <div style={style} className="item">
            <span>title: {title} --- name：{name} </span>
            <span> text :{text}</span>
        </div>
    );
}

function VirtualList() {
    const [list, setList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [queryTitle, setQueryTitle] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(body => {
                setList(body);
                setShowList(body);
            })
    }, [])

    const handleSearch = (e) => {
        const value = e.target.value;
        setQueryTitle(value);

        // web worker处理搜索
        const worker = new Worker('./work.js');
        worker.postMessage({value, list});
        worker.onmessage = function (e) {
            console.log('main接收work返回的信息: ' ,e.data)
            setShowList(e.data)
        }

        // 直接搜索
        // let searchData = list.filter((item, i) => {
        //     return item.title.indexOf(value) > -1
        // })
        // setShowList(searchData)
    }

    return (
        <div className="App">
            <div>
                <div>虚拟列表</div>
                <div>
                    按标题搜索：
                    <input type="text" value={queryTitle} onChange={handleSearch}/>
                </div>
                <List
                    height={200}
                    itemCount={showList.length}
                    itemData={showList}
                    itemSize={35}
                    width={'100%'}
                >
                    {Row}
                </List>
                <div style={{background: '#f40', padding: '10px'}}>共：{showList.length}条</div>
            </div>
        </div>
    );
}

export default VirtualList;
