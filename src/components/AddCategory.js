import React,{useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const [mensajeError,setMensajeError] = useState('');

    const handleInputChange = (e)=>{
        //console.log(e)
        setinputValue(e.target.value)
    }

   
    //CAPTURAR EL ENTER DEL FORMULARIO
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        if (inputValue===null || inputValue==="" || inputValue===undefined) {
            setMensajeError('La categoría no puede ir vacía');
        }else{
            setMensajeError('');
            setCategories(cats => {
                //return [...cats,inputValue]
                return [inputValue]
            });
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
            />
            <small
                className="error"
            >{mensajeError}</small>
        </form>
    )
}


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}