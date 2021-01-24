import e from 'cors';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditArticle = (props) => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorName] = useState("");
    const [message, setMessage] = useState("");

    const changeOnClick = e => {
        e.preventDefault();

        const articles = {
            title,
            article,
            authorname
        };

        setTitle('');
        setArticle('');
        setAuthorName('');


        axios
        .put(`/articles/update/${props.match.params.id}`, articles)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        axios
        .get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
        .catch(error => console.log(error));
    }, []);



    return (
        <AddArticleContainer>
            <div className="container">
                <h1>Edytuj artykuł</h1>
                <span className="message">{message}</span>
                <form onSubmit={changeOnClick} encType="multipart/form-data"> 
                    <div className="form-group">
                        <label htmlFor="authorname">Autor</label>
                        <input
                            type="text"
                            value={authorname}
                            onChange={e => setAuthorName(e.target.value)}
                            className="form-control"
                            placeholder="Imię autora" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Tytuł</label>
                        <input 
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-control" 
                        placeholder="tytuł" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article">Artykuł</label>
                        <textarea
                        value={article}
                        onChange={e => setArticle(e.target.value)}
                        className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Edytuj artykuł</button>
                </form>
            </div>
        </AddArticleContainer>
    );
};

export default EditArticle;
//main container
const AddArticleContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

    h1 {
        font-weight: 900;
        color: var(--pink);
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--pink);
        border: none;
        &:hover {
            background: var(--pink);
        }
    }

    .message {
        font-weight: 900;
        color: tomato;
        padding: 1rem 1rem 1rem 0;
    }
`;