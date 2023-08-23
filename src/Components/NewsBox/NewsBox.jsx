import React from 'react';
import './NewsBox.css'
import { Link } from 'react-router-dom';

const NewsBox = (props) => {
    const { title, article, imageSrc, id } = props.nws;
    const slicedArticle = article.slice(0, 150);
    return (
        <div className="child">
            <div className="image">
                <img src={imageSrc} alt="" />
            </div>
            <div className="content">
                <h3><Link to={'/news/' + id}>{title}</Link></h3>
                <p>{slicedArticle} .......</p>
            </div>
        </div>
    );
};

export default NewsBox;