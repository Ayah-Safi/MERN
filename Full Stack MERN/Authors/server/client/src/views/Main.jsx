import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import AuthorsList from '../components/AuthorsList';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
   
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/authors/new"}>Add an Author</Link>
            <p>We have quotes by:</p>
            {loaded ? <AuthorsList authors={authors} removeFromDom={removeFromDom}/> : <p>Loading authors...</p>}
        </div>
    );
}

export default Main;