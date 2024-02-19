//Primero React

//Segundo, importanciones de terceros

//Tercero nuestro codigo
import { GifItem } from './GifItem';
//Cuarto funciones o hooks
import { useFetchGifs } from '../hooks/useFetchGifs';


  export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    console.log({ images, isLoading}, 'loading');

    

    return (
      <>
        <h3>{category}</h3>
        { 
        //esto es como
        //un IF un AND  logico
          isLoading && (<h2>Cargando...</h2>)
        }
       
        <div className='card-grid'>
        {images.map( (image) => (
          <GifItem 
          key={image.id}
          { ...image }/>
        ))
        }   
        </div>
      </>
    )
  }
