import React from 'react'

export const GifGrid = ({category}) => {
  
    const getGifs = async ()=>{

        const url =`https://api.giphy.com/v1/gifs/trending?key=oJHDZPbqIEavBSoj37exjyFUzbE48RL7&q=${category}&limit=20`;
        const resp = await fetch( url )
        const { data } = await resp.json();
        
        const gifs = data.map(img=>{
          return{
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
          }  
        })
        console.log(gifs);
    }
  
    getGifs();//no se hace

    return (
    <>
        <h3>{category}</h3>
        <p>Hol mundo</p>
    </>
  )
}
