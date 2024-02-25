import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.error(err));
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/authors/${id}`, {
            name   
        })
            .then(res => {
                console.log(res);
                navigate("/authors");
            })
            .catch(err => console.error(err));
    };

    const handleCancel = () => {
        navigate("/authors"); 
    };

    return (
        <form onSubmit={updateAuthor}>
            <h1>Favorite authors</h1>
            <Link to={"/authors"}>Home</Link>
            <h3>Edit an author:</h3>

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
};

export default Update;
