const getGifs = async (category) => {

    const AK = 'XRN5wWWMSrxEWAKfSV7KVUAHVakFoLLQ';
    const api = 'api.giphy.com/v1/gifs/search';
    const limit = 10;
    const url = `https://${api}?api_key=${AK}&q=${category}&limit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

export default getGifs