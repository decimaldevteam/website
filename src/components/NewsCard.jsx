import React from 'react';
import moment from 'moment';

export default function NewsCard({ news }){

    return <div className="news-card">
        <div className="news-content">
            <div>
                <img src={news.author.avatar} alt="Avatar"/>
            </div>
            <div className="news-alt-side">
                <strong>{news.author.name}</strong> <font style={{ opacity: 0.5 }}>{moment(news.timestamp).fromNow()}</font>
                <p style={{ marginTop: 0 }}>{news.content}</p>
            </div>
        </div>
    </div>

}