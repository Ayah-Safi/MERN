import React, {useState} from 'react';

const Tab = (props) => {
    const {isActive, setActiveTab, tab} = props;

    return (
        <div 
        onClick={() => setActiveTab(tab)}
        style={{
            border: '1px solid black', 
            background: isActive ? 'black' : 'transparent', 
            color: isActive ? 'white' : 'black',
            padding: '10px 15px',
            width: 50,
            cursor: 'pointer'
            }}>
            {tab.header}
        </div>
    )
}

export default Tab;