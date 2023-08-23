import React, { useContext } from 'react';
import './NewsDetails.css'
import { useParams } from 'react-router-dom';
import { NewsContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';

const NewsDetails = () => {
    // Use Params 
    const { newsId } = useParams();

    // Use Context getting newsData
    const { news, setNews } = useContext(NewsContext);
    const exactNews = news.find(ns => ns.id == newsId);
    const { title, author, published, imageSrc, article } = exactNews;

    // Use Context getting commentsData 
    const { comments, setComments } = useContext(NewsContext);
    const exectComments = comments.filter(comnt => comnt.postId == newsId);

    return (
        <div className='newsDetails'>
            <div className="newsContainer">
                <div className="onlyNews">
                    <h1>{title}</h1>
                    <p className='author'><span><FontAwesomeIcon icon={faUser} /></span>{author}</p>
                    <p className='clock'><span><FontAwesomeIcon icon={faClock} /></span>{published}</p>
                    <img src={imageSrc} alt="" />
                    <p>{article}</p>
                </div>
            </div>
            <div className="onlyComment">
                <h2>Only comments</h2>
                {
                    exectComments.map(excomnt =>
                        <div className='commentContainer'>
                            <div className="userImage">
                                <img src={excomnt.img} alt="" />
                            </div>
                            <div className="comment">
                                <h4>{excomnt.name.slice(0, 15)}</h4>
                                <p>{excomnt.body}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default NewsDetails;