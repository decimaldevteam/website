import React from 'react';
import Header from '../components/Header';
import Project from '../components/Project';
import Contributors from '../components/Contributors';
import YouTube from '../components/Youtube';

export default function Home(){

    const [loaded, setLoadedState] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector('.load-img').style.width = '200px';
                document.querySelector('.load-img').style.marginTop = 'calc(55vh - 200px)';
                setTimeout(() => {
                    document.querySelector('.load-img').style.width = '150px';
                    document.querySelector('.load-img').style.marginTop = 'calc(50vh - 150px)';
                }, 100)
                setTimeout(() => {
                    document.querySelector('.load-img').style.opacity = 0;
                    setTimeout(() => setLoadedState(true), 200);
                }, 500);
            }, 1000)
        });
    }, []);

    if(!loaded) return <img src="https://cdn.decimaldev.xyz/white-logo.svg" className="load-img" alt="Loading" draggable="false"/>

    return <>
        <Header/>

        <div>
            <div className="main-content">
                <h1>Decimal Development</h1>
                <h3>
                    We are just a community of small developers who try to provide open source projects to developers. This development was started on 2020 by Scientific Guy and currently has many members...<br/>
                    We mostly do web projects and npm packages too!
                </h3>
                <div className="main-btns">
                    <a href="https://github.com/Scientific-Guy"><i className="fab fa-github"/>{"  "}GitHub</a>
                    <a href="https://discord.gg/FrduEZd"><i className="fab fa-discord"/>{"  "}Discord</a>
                </div>

                <div className="sections">
                    <hr/>

                    <div className="projects" id="projects">
                        <h2 className="heading">Projects <span onClick={() => document.getElementById('projects').scrollIntoView()}/></h2>

                        <div className="row">
                            {window.projects.slice(0, 6).map(x => <Project project={x}/>)}
                        </div>

                        <span className="proj-last-btn"><a href="/projects">View all of the projects here</a></span>
                    </div>

                    <hr/>

                    <div className="contributors" id="contributors">
                        <h2 className="heading">Contributors <span onClick={() => document.getElementById('contributors').scrollIntoView()}/></h2>
                        <div><Contributors/></div>
                    </div>

                    <hr/>

                    <div id="yt-latest-vid">
                        <div className="latest-video" id="latest-video">
                            <h2 className="heading">Latest Video <span onClick={() => document.getElementById('latest-video').scrollIntoView()}/></h2>
                            <YouTube/>
                        </div>

                        <hr/>
                    </div>

                    <div className="contact" id="contact">
                        <div style={{ textAlign: 'center', paddingTop: '30px' }}>
                            <h3>We'd love to talk</h3>
                            <p style={{ width: '80%', textAlign: 'center', margin: 'auto' }}>If you want to contact us, you can contact us through our discord server or through twitter!. We will also provide support for new developers too. Even you can contribute to this development! We always look opportunities to do exciting projects and websites! We now also make tutorials on youtube for beginners!</p>
                            <div className="footer-svg-row">
                                <a href="https://github.com/decimaldevteam"><i className="fab fa-github fa-2x"/></a>
                                <a href="https://discord.gg/FrduEZd"><i className="fab fa-discord fa-2x"/></a>
                                <a href="https://twitter.com/devdecimal"><i className="fab fa-twitter fa-2x"/></a>
                                <a href="https://www.youtube.com/channel/UCu6B4Z62fiCT_mwwHlc84iQ"><i className="fab fa-youtube fa-2x"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

}