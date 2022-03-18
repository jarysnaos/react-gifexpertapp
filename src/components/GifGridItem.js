import React from 'react'

export const GifGridItem = ({id,title,url}) => {
  return (
    <div className='divGif animate__animated animate__bounce'>
        <div className='divImg'>
            <img 
            className='gifImg'
            src={url}  
            alt={title} />
        </div>
        <div className='divText'>
            <p>{title}</p>
        </div>
    </div>
  )
}
