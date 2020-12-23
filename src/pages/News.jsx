import React from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';

export default function News(){

    const [news, setNews] = React.useState([]);

    if(!news.length){
        fetch('https://api.decimaldev.xyz/news')
        .then(res => res.json())
        .then(setNews)
    }

    return <>
        <Header noHash={true}/>

        <div className="main-content">
            <h1>News</h1>
            <h3>Get some fresh news of our development!</h3>
        </div>

        <div style={{ padding: '40px', marginTop: '-40px' }}>
            {news.map(x => <NewsCard news={x}/>)}
        </div>
    </>

}