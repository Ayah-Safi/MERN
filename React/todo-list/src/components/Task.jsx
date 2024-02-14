import React, { useState } from 'react';

const Task = (props) => {
    const { title, handleRemove, handleToggle, completed } = props;

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5}}>
            <span style={{textDecoration: completed ? 'line-through' : 'initial'}}>{title}</span>
            <label for="myCheckbox" class="checkbox"></label>
            <input type="checkbox" id="myCheckbox" onChange={handleToggle}/>
            <button onClick={handleRemove}>Delete</button>
        </div>
    )

}

export default Task;