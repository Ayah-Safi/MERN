import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const AddAuthor = (props) => {
    const [name, setName] = useState(""); 
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const createAuthor = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/authors', { name })
        .then(res => {
            console.log(res);
            setName("");
            navigate("/authors");
        })
        .catch(err => {
            const errorResponse = err.response.data;
            const errorMessages = Object.values(errorResponse.errors).map(error => error.message);
            setErrorMessage(errorMessages.join(", "));
            console.log(err);
        });
    };

    const handleCancel = () => {
        navigate("/authors");
    };

    return (
        <form onSubmit={createAuthor}>
            <h1>Favorite authors</h1>
            <Link to={"/authors"}>Home</Link>
            <h3>Add new author:</h3>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px", alignItems: "center" }}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", maxWidth: "300px" }} 
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default AddAuthor;
