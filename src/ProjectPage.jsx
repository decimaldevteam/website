/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import ProjectList from './utils/projects';

class ProjectPage extends React.Component{

    constructor(props){
        super(props);
        this.state = { projects: ProjectList.map(x => <Project project={x}/>) };
    };

    render(){

        let ProjectTab = this.state.projects;

        const search = _ => {
            let q = document.getElementById('input-box').value.toLowerCase();
            this.setState({
                projects: ProjectList.filter(x => {
                    x = x.name.toLowerCase();
                    return x.includes(q) ||
                    x.startsWith(q) ||
                    q.startsWith(x)
                }).map(x => <Project project={x}/>)
            });
        };

        return <>
           <Header/>
           <div className="coverpage">
                <div className="coverpage-content">
                    <h2>Decimal Development</h2>
                    <p>Search our projects...</p>

                    <div className="search-group">
                        <input type="text" placeholder="Your search here" onKeyPress={search} id="input-box"></input>
                    </div>
                </div>
            </div>

            <div>
                <div className="row-handler">
                    <h2>{ProjectTab.length} results found...</h2>
                    <div className="row">{ProjectTab}</div>
                </div>
            </div>

           <Footer/>
        </>

    };

};

export default ProjectPage;