import { PropTypes } from 'prop-types';
import { GifGfridItem } from './GifGfridItem';
import { useFetchGigs } from '../hooks/useFetchGigs';
/*    
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
*/
export const GifGrid = ({ category }) => {
  // Custon hook
  const { images, isLoading } = useFetchGigs(category);
  console.log(images, isLoading);

  return (
    <>
      <h3 aria-label="h3">{category}</h3>
      {
        isLoading ? <h2>Cargando...</h2> : null // opcion con ternario, pues el null no se renderiza en react
        // isLoading && (<h2>Cargando...</h2>) //operador and logico, if corto
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifGfridItem
            key={image.id}
            title={image.title}
            url={image.url}
            // {...image} // envio todos los campos del objeto
          />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
