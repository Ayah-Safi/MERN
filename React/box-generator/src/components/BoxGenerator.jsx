import React, { useState } from "react";
import Box from './Box';

const BoxGenerator = () => {

    const [colors, setColors] = useState([]);

    const onSumbit = (e) => {
        e.preventDefault();
        const newColor = e.target.color.value;
        setColors([...colors, newColor]);
    }
    
    return (
        <>
            <form onSubmit={onSumbit}>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" />
                <button type="sumbit">Add</button>
            </form>

            <div style={{display: 'flex', gap: 10}}>
                {colors.map((color, index) => <Box key={index} color={color}/>)}
            </div>
        </>
    );
};

export default BoxGenerator;