import React, {useEffect, useState} from 'react';
import '../App.css';


function RealList() {
    const [list, setList] = useState([]);
    const [queryTitle, setQueryTitle] = useState('');
    const [showList, setShowList] = useState([]);

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
                <div>真实列表</div>
                <div>
                    按标题搜索：
                    <input type="text" value={queryTitle} onChange={handleSearch}/>
                </div>
                <div>
                    {showList.map((item, index) => {
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
