/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Header({ noHash }){

    return <div className="header">
        <div className="header-content">
            <div className="header-links">
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                {
                    noHash ?
                    '' :
                    <>
                        <a onClick={() => document.getElementById('contributors').scrollIntoView()}>Contributors</a>
                        <a onClick={() => document.getElementById('contact').scrollIntoView()}>Contact</a>
                    </>
                }
            </div>
        </div>
    </div>

}