import axios from 'axios';

export const getGifs = async (category) => {
    const api_key = 'URLjL49KyzdscasPa5146vq3CmpIYQjq';
    let gifs;
    await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ encodeURI(category) }&limit=10`)
    .then((response) => {
        const { data : { data } } = response;
        gifs = data.map ( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });
    });
    return gifs;
};