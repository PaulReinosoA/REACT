import React from 'react'

export const GifGfridItem = ({id,url,title}) => {
    return (
        <div className="card">
                <img src={url} alt={title}/>                
                <p>{title}</p>
        </div>
    )
}
