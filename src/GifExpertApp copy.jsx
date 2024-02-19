import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () =>{
    const [categories, setCategories] = useState([ 'Cats', 'Dogs' ]);
    
    const onAddCategory = (newCategory) => {

        //VALIDACION DE NOMBRES UNICOS
        if( categories.includes( newCategory ) ) return;
        
        console.log(newCategory);
        //Pájaros
        //setCategories([...Categories, 'Categoria ']);
        //setCategories( cat => [...cat, 'Pájaros']);
        //Esto es una desestructuración:
        //setCategories(oldCategories => [...oldCategories, `Categoria ${oldCategories.length+1}`]);
        //También se puede agregar al inicio del listado:
        //setCategories(oldCategories => [`Categoria ${oldCategories.length+1}`, ...oldCategories ]);
        setCategories([ newCategory, ...categories]);

    }

    return (
        <>
        {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory 
            // setCategories={ setCategories }
                //"on" para cuando se implementará algo...un evento
                //propiedad      argumento que mandamos a una función
                onNewCategory = { value => onAddCategory(value)}
            />
            {/* listado de Gif */}
            {/* ol = order list */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                    ))
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}