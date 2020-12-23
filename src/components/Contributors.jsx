import React from 'react';

export default function Contributors(){

    const [data, setData] = React.useState(null);

    if(!data){
        fetch('https://cdn.decimaldev.xyz/contributors.json')
        .then(res => res.json())
        .then(setData);

        return null;
    }

    console.log(data)

    return <>
        {data.map(x => <a href={x.url}><img src={`https://cdn.decimaldev.xyz/avatars/${x.avatar}`} alt={x.name}/></a>)}
    </>

}