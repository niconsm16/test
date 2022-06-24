import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGif';

//? Un CustomHook consta de retornar un objeto con sus constantes de useStates, permitiendo asociar varios usestates junto a effects dentro de un proceso de lógica aparte

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages()
    }, [])


    return {
        images,
        isLoading
    }
}

export default useFetchGifs