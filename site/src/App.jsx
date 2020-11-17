/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import InfoCard from './components/Infocard';
import Project from './components/Project';
import { UserCard } from './components/Components';
import ProjectList from './utils/projects';

class App extends React.Component{

    render(){

        const ProjectTab = ProjectList.slice(0, 3).map(x => <Project project={x}/>);

        return <>
            <Header/>

            <div className="coverpage">
                <div className="coverpage-content">
                    <h2>Decimal Development</h2>
                    <p>A community of small developers which makes open source projects</p>
                    <div>
                        <a href="https://github.com/scientific-guy" className="socialcard">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://discord.gg/FrduEZd" className="socialcard">
                            <i class="fab fa-discord fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/devdecimal" className="socialcard">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '30px' }}>
                <InfoCard title="Projects">
                    <div className="row-handler" style={{ marginTop: '-20' }}>
                        <div className="row">{ProjectTab}</div>
                        <a 
                            href="/#/projects" 
                            style={{
                                textAlign: 'center',
                                color: '#18181d',
                                fontFamily: 'Alata',
                                display: 'block',
                                marginTop: '20px'
                            }}
                        >View our all projects here</a>
                    </div>
                </InfoCard>
            </div>

            <InfoCard title="Contributors">
                <div className="contrib-handler" style={{ textAlign: 'center' }}>
                    <UserCard
                        src="https://cdn.discordapp.com/avatars/662207542486630401/f905247207d131db59197b1fd51a0f86.webp"
                        alt="Scientific Guy"
                        href="https://github.com/scientific-guy"
                    />
                    <UserCard
                        src="https://cdn.discordapp.com/avatars/460751723342987274/a_a6534a3e159c93ce833139c84d9340ea.gif?size=1024"
                        alt="Yatra"
                        href="https://starstracker.xyz/"
                    />
                    <UserCard
                        src="https://cdn.discordapp.com/avatars/697377187808149564/1344b759bbffa1f9fbef7e740d8bcb7b.png?size=1024"
                        alt="Kazult"
                        href="https://github.com/1GPEX"
                    />
                    <UserCard
                        src="https://media.discordapp.net/attachments/708347514457161728/768469441502511144/snapshot169.png"
                        alt="Shade"
                        href="https://shadeoxide.gq/"
                    />
                </div>
            </InfoCard>

            <div style={{ marginTop: '15px' }}>
                <InfoCard title="About">
                    <div className="row about">
                        <img
                            src="/assets/font-logo.png"
                            draggable="false"
                        />
                        <p>
                            We are just a community of small developers who try to provide open source projects to developers. This development was started on 2020 by Scientific Guy and currently has many members...<br/><br/>We have currently made projects like Spotify-api and Quickmongo.py and much more!
                        </p>
                    </div>
                </InfoCard>
            </div>

            <div style={{ marginTop: '-45px' }}>
                <InfoCard title="Join our discord server">
                    <div className="discord-box">
                        <iframe 
                            src="https://discordapp.com/widget?id=736099894963601438&theme=dark" 
                            allowtransparency="true" 
                            frameborder="0" 
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        />
                    </div>
                </InfoCard>
            </div>
             
            <Footer/>
        </>
    };

};

export default App;