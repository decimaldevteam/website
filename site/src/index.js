/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, useParams } from 'react-router-dom';

import App from './App';
import ProjectPage from './ProjectPage';
import NewsPage from './News';

import './main.css';

ReactDOM.render( 
    <HashRouter basename="/">
        <Route path="*" component={_ => {
            let route = useParams()[0];
            if(route == '/projects') return <ProjectPage/>
            else if(route == '/news') return <NewsPage/>
            else return <App/>
        }}/>
    </HashRouter>, 

    document.getElementById('main') 
)