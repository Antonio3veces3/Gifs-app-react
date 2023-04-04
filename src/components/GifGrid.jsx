import React from 'react'
import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  const {gifs, isLoading} = useFetchGifs(category);
  console.log(isLoading);

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<p>Loading...</p>)
          //if corto con una sola condicion. AND operator)
        }
        {
          gifs.length==0 && (<p>Gifs NOT-FOUND</p>)
        }
        <div className='card-grid'>
          {/*Renderizamos los Gifs */}
          {
            gifs.map((gif) => (
              <GiftItem key={gif.id} {...gif} />
            ))
          }
        </div>
    </>
  )
}
