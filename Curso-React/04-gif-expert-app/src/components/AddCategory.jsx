import { useState } from 'react';
//SI EL LOG SE LIMPIA POR LA EJECUCION ESTE PUEDE CONFIGURARASE PARA PRECERVARLO EN SETINGS DE f12 PRECERVLOG
//export const AddCategory = ( {setcategories} ) => {
export const AddCategory = ( {onSendNewCategory} ) => {

    const [inputstateValue, setInputState] = useState()
    
    const onImputChange = ({target})=>{ //desestructuro del event el target
        //detecta el cambio y lo pone en inputstateValue
        setInputState(target.value);
    }

    const onSubmit = (event)=>{

        event.preventDefault();
        if(inputstateValue.trim().length <=1 ) return //valido no insertar vacios
        if(inputstateValue.trim().length <=1 ) return
        //const categoryUno = inputstateValue;        
        //setcategories( categ => [categoryUno, ...categ] );//se avisa sobre el cambio a redibujar del componente padre
        onSendNewCategory( inputstateValue.trim() );//se avisa sobre el cambio a redibujar del componente padre
        setInputState('')//limpio el input tras cada enter
    }
    
    return (
        <form onSubmit={ (event)=>{onSubmit(event)}/*SUBMIT - ENTER*/ }>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputstateValue}
                //onChange={ (event)=> {onImputChange(event)} }
                onChange={ onImputChange } //abrebiatura
            />
        </form>
    )
}

