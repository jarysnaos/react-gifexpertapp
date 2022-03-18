import React,{useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setimages] = useState([]);

    const {data:images,loading}=useFetchGifs(category);
    
   
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            { loading ? <p className="animate__animated animate__fadeIn">Cargando...</p> : <p></p>}
            { <div className='gifGrid'>
                {
                    images.map(
                        img=>(<GifGridItem 
                            key={img.id} 
                            {...img}></GifGridItem>)
                    )
                }
            </div> }
        </>
    )
}
