import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Dragon Ball','Evangelion','xxx'];
    const [categories,setCategories]=useState(['hi']);

    /*
    const handleAdd=() =>{
        setCategories( cats => [...categories,'HunterX'] );
    }*/
    //<button onClick={handleAdd}>Agregar Categoría</button>
    return (
        <>
            <h2>GifExpertApp</h2>
           
            <AddCategory setCategories={ setCategories }></AddCategory>
            <ol>
            {
                categories.map( (category,i) => (
                    <GifGrid 
                        key = {category}
                        category={category}></GifGrid>
                    ))
            }
            </ol>
        </>
    )
}
