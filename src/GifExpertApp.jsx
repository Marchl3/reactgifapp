import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Cats']);

    const onAddCategory = (newCategory) => {
        //VALIDACION DE NOMBRES UNICOS
        if (categories.includes(newCategory)) return;

        //console.log(newCategory);
        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map( ( category ) => (
                    <GifGrid
                        key = { category }
                        category = { category }
                    />
                ))
            }
        </>
    )
}