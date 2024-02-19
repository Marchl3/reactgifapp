import { useState } from 'react';


//DESESTRUCTURAR PARA TRAER CATEGORIAS DE DIFERENTE COMPONENTE
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);

    }

    
    const onSubmit = (event) => {
      //para que no se recargue al hacer enter
      event.preventDefault();
      //VALIDACIONES
      if (inputValue.trim().length <= 1) return;
      //inputValue -> lo que se mandará para actualizar el padre
      //TAREA: llamar a setCategories(desestructurar.haciendo algo para añadirle el inputValue)
      //setCategories(oldCategories => [`Categoria ${oldCategories.length+1}`, ...oldCategories ]);
      //setCategories(oldCategories => [... oldCategories, inputValue]);
      onNewCategory( inputValue.trim() );
      //LIMPIAR EL IMPUT DESPUES DEL ENTER
      setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
    <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange }
    />
    </form>
  )
}
