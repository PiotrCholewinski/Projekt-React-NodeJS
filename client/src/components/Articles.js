import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

const Articles = ({ posts }) => {
    const [article, setArticle] = useState([])
    //usuniecie artykulu
    const deleteArticle = id => {
        axios
        .delete(`/articles/${id}`)
        .then(res => alert(res.data));
        setArticle(article.filter(elem => elem._id !== id));

    } 
   return (
        <MainContainer>
            
            {posts.map((article, key) => (
                <div className="container" key={key}>
                    <Link 
                    to={{
                        pathname: `/article/${article._id}`
                    }}
                    >
                    
                    
                <h2>{article.title}</h2>
                </Link>
                <p>{article.article}</p>
                <span className="badge badge-secondary p-2">
                    {article.authorname}</span>
                    <div className="row my-5">
                        <div className="col-sm-2">
                            <Link 
                            to={`/update/${article._id}`}
                             className="btn btn-outline-success">
                                Edytuj artykuł</Link>
                        </div>
                        <div className="col-sm-2">
                            <button onClick={() => deleteArticle(article._id)}
                             className="btn btn-outline-danger">
                                Usuń artykuł</button>
                        </div>
                    </div>
                   <hr/>
            </div>
                
            ))}   
        </MainContainer>
   );
};

export default Articles

//Main container
const MainContainer = styled.div`
    margin: 7rem 0;
`;