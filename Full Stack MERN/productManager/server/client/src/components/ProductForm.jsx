import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");


    const onSubmitHandler = e => {
        e.preventDefault(); // Prevent default form submission behavior
        axios.post('http://localhost:8000/product', {
            title,
            price,
            desc
        })
        .then(res => {
            console.log(res);
            const newProduct = res.data;
            props.addToDom(newProduct)
            setTitle("");
            setPrice("");
            setDesc("");
            
        })
        .catch(err => console.log(err));
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Desc:</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit"/>
        </form>
    )
}