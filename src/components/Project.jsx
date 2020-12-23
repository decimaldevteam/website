import React from 'react';

export function BreakButton({ button }){
    return <a href={button.href}><i className={button.svg}/></a>
}

export default function Project({ project }){

    return <div className="project-card">
        <div className="svg-row">
            <i className="far fa-folder-open fa-2x"/>
            <span style={{ float: 'right' }}>
                <a href={project.link}><i className="fas fa-external-link-alt"/></a>
                {project.buttons.map(x => BreakButton({ button: x }))}
            </span>
        </div>

        <h2>{project.name}</h2>
        <p>{project.description}</p>

        {project.languages.map(x => <font>{x}</font>)}
    </div>

};