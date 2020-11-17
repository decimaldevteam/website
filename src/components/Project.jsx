/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

const colors = {
    typescript: '#2b7489',
    javascript: '#f1e05a',
    python: '#3572A5',
    golang: '#00ADD8'
};

export default function({ project }){

    return <>
        <div className="card-holder" style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div className="card">
                <h3>{project.name} <font className="muted" style={{ fontSize: '15px' }}>{project.package} package</font></h3>
                <p>{project.description}</p>
                <font style={{ marginTop: '-5px', marginBottom: '15px', display: 'flex' }}>
                    <div className="langcol" style={{ backgroundColor: colors[project.language.toLowerCase()] }}/>
                    <font style={{ marginTop: '-6px', marginLeft: '4px' }}>{project.language}</font>
                </font>
                <div>{project.buttons}</div>
            </div>
        </div>
    </>

};