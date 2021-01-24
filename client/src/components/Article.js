import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Article = props => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [authorname, setAuthorName] = useState('');

    useEffect(() => {
        axios
        .get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
        .catch(error => console.log(error));
    }, [props]);


    

    return (
        <MainContainer>
            <h2>{title}</h2>
            <p>{article}</p>
            <p>{authorname}</p>
            <br/>
            <Link to="/" type="submit" 
            className="btn btn-primary">Powrót do strony głównej
            </Link>
        </MainContainer>
    );
};

export default Article

//main container
const MainContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2 {
        text-align: center;
        font-weight: 900;
        color: var(--pink);
    }
    .btn-primary {
        background: var(--pink);
        border: none;
        &:hover {
            background: var(--pink);
        }
    }
`;