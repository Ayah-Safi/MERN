import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const AuthorsList = (props) => {
    const { removeFromDom } = props;
    const navigate = useNavigate(); 
    const handleEdit = (authorId) => {
        navigate(`/authors/edit/${authorId}`);
    };

    const handleDelete = (authorId) => {
        axios.delete('http://localhost:8000/authors/' + authorId)
        .then(res => {
            removeFromDom(authorId)
        })
        .catch(err => console.error(err));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap:"10px", width: "500px" }}>
            {props.authors.map((author, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", width: "100%" }}>
                    <p style={{ margin: 0, width: "100px", textAlign: "left" }}>{author.name}</p> 
                    <button onClick={() => handleEdit(author._id)}>Edit</button>
                    <button onClick={() => handleDelete(author._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AuthorsList;

