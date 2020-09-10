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
        let searchData = list.filter((item, i) => {
            return item.title.indexOf(value) > -1
        })
        setShowList(searchData)
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
            </div>
        </div>
    );
}

export default VirtualList;
