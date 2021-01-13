import React from 'react';

export default function YouTube(){

    const [ID, setID] = React.useState(null);

    fetch('https://api.decimaldev.xyz/v2/latest')
    .then(res => res.json())
    .then(data =>  setID(data.youtube));

    return <div className="iframe-holder">
        <iframe title="Youtube Latest Video" src={`https://www.youtube.com/embed/${ID}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>

}