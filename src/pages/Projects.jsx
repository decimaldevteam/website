import React from 'react';
import Header from '../components/Header';
import Project from '../components/Project';

export default function Projects(){

    const [projects, setProjects] = React.useState(window.projects);

    return <>
        <Header noHash={true}/>

        <div className="main-content">
            <h1>Search Projects</h1>
            <h3>Search some of our projects which can help you!</h3><br/>
            <input placeholder="Your search here..." id="input" onKeyPress={() => {
                let value = document.getElementById('input').value;
                setProjects(window.projects.filter(x => x.name.includes(value) || value.includes(x.name)));
            }}/>
        </div>

        <div style={{ padding: '40px', marginTop: '-40px' }}>
            <font>{projects.length} results found...</font>

            <div className="row">{projects.map(x => <Project project={x}/>)}</div>
        </div>
    </>;

}