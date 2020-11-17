/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import moment from 'moment';

export default function({ news }){
    return <>
        <div className="card full-width">
            <h3>{news.title}</h3>
            <font className="muted">{moment(news.posted, 'DD/MM/YYYY').fromNow()}</font>
            <p style={{ marginTop: '10px' }}>{news.content}</p>
            <font>
                <strong>Posted by </strong><a href={'https://github.com/' + news.author}>{news.author}</a>
            </font>
        </div>
    </>
};