import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const loadGifs= async()=>{
      const newGifs= await getGifs(category);
      setGifs(newGifs);
      setIsLoading(false);
    }
   
    useEffect(()=>{
      //Solamente recibe una funcion
      //No se puede utilizar async-await
        loadGifs();
    },[]);
  
    return {
        gifs,
        isLoading
    };
}
