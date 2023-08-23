import React, { useContext } from 'react';
import { NewsContext } from '../Context/Context';
import NewsBox from '../NewsBox/NewsBox';
import './AllNews.css'

const AllNews = () => {
    // Use Context 
    const {news, setNews} = useContext(NewsContext);

    return (
        <div className='allNews'>
            {
                news.map(nws => <NewsBox nws={nws} />)
            }
        </div>
    );
};

export default AllNews;