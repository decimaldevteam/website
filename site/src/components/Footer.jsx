import React from 'react';

export default function Footer(){
    return <>
        <div className="footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path fill="#282c34" fill-opacity="1" d="M0,160L26.7,181.3C53.3,203,107,245,160,256C213.3,267,267,245,320,218.7C373.3,192,427,160,480,165.3C533.3,171,587,213,640,208C693.3,203,747,149,800,133.3C853.3,117,907,139,960,170.7C1013.3,203,1067,245,1120,240C1173.3,235,1227,181,1280,170.7C1333.3,160,1387,192,1413,208L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
            </svg>
            <div className="footer-content">
                <h3>Decimal Development © 2020</h3>
                <div style={{ marginTop: '15px' }}>
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
        </div>
    </>;
};