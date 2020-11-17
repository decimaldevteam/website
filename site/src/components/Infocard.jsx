/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class InfoCard extends React.Component{

    render(){
        const id = this.props.title.toLowerCase().split(' ').join('-');
        // eslint-disable-next-line no-restricted-globals
        const redirect = _ => location.href = `#${id}`;

        return <div id={id} className="infocard">
            <h1 style={{ textAlign: 'center' }}>
                <a className="hash" onClick={redirect}>#</a> {this.props.title}
            </h1>
            <div>
                {this.props.children}
            </div>
        </div>
    };

};

export default InfoCard;