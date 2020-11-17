/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

class Header extends React.Component{

    render(){
        return <>
            <div className="header">
                <div className="header-content">
                    <div className="header-logo">
                        <img
                            src="/assets/favicon.png"
                            draggable="false"
                            width="50"
                        />
                    </div>
                    <div className="header-links">
                        <a href="/#/">Home</a>
                        <a href="https://github.com/scientific-guy">GitHub</a>
                        <a href="https://discord.gg/FrduEZd">Discord</a>
                        <a href="/#/projects">Projects</a>
                        <a href="/#/news">News</a>
                    </div>
                </div>
            </div>
        </>
    };

};

export default Header;