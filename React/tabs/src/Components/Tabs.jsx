import React, { useState } from 'react';
import Tab from './Tab';

const tabs = [
    {
        header: 'tab1',
        content: 'tab1 content'
    },
    {
        header: 'tab2',
        content: 'tab2 content'
    },
    {
        header: 'tab3',
        content: 'tab3 content'
    }
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(null);

    return (<div style={{display: 'flex', flexDirection: 'column' ,gap: 10}}>
        <div style={{display: 'flex', gap: 5}}>
            {tabs.map((tab, index) => 
                 <Tab 
                 key={index} 
                 setActiveTab={setActiveTab} 
                 isActive={activeTab?.header === tab.header} 
                 tab={tab}>

                 </Tab>
            )}
            
        </div>
        <div>
                {activeTab?.content}
            </div>
    </div>)
}

export default Tabs;