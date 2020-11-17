import React from 'react';

export function UserCard({ src, alt, href }){
    return <a href={href}>
        <img 
            src={src}
            alt={alt}
            draggable="false"
            style={{
                borderRadius: '100%',
                height: 60,
                width: 60
            }}
        />
    </a>
};