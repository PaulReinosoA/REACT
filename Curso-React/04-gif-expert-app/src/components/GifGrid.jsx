import React, { useEffect, useState } from 'react';
import { getGifs } from '../Helpers/getGifs'
import { GifGfridItem } from './GifGfridItem';

export const GifGrid = ({category}) => {
    
  //hook que envia a redibujar
  const [images, setimages] = useState([])

  const getImages = async() => {
    const newImages = await getGifs(category);
    setimages(newImages)
  }

  //Hook de react dispara efectos secundarios procesos que se disparan cuando algo suceda cuando el counter cambio o el objeto se renderice por primera vez,... etc.
  useEffect(() => { //usa dos argumentos callback,lista de dependencias(Condiciones para ejecutar el callback)    
    getImages();//no se hace-->>> no se llama al compoente  directamenet-->useEffect
  }, [])//si las dependencias estan vacias [] disparamos solo una vez al generar le componente
  
  
  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image)=>
          <GifGfridItem 
          key = { image.id } 
          // title = { image.title } 
          // url = { image.url }           
          {... image}
          />
        )}
      </div>
    </>
  )
}


