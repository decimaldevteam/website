/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import NewsBox from './components/NewsBox';

class NewsPage extends React.Component{

    constructor(props){
        super(props);
        this.state = { content: <h3>Loading news...</h3> }
    };

    componentWillMount(){
        fetch('/news.json')
        .then(res => res.json())
        .then(body => this.setState({ content: body.map(x => <NewsBox news={x}/>) }))
    };

    render(){

        return <>
            <Header/>

            <div className="coverpage">
                <div className="coverpage-content">
                    <h2>Decimal Development</h2>
                    <p>News and announcements of our development</p>
                </div>
            </div>

            <div className="news" style={{ padding: '30px' }}>
                {this.state.content}
            </div>

            <Footer/>
        </>

    };

};

export default NewsPage;