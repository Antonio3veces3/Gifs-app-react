import axios from 'axios';

export const getGifs = async(category)=>{
    let gifs = [];
    await axios.get(`https://api.giphy.com/v1/gifs/search`,{
        params:{
            api_key: 'IDMVH1m9e6CLJHD2Y6yAcaIfhGMt6gkA',
            limit: 4,
            q: category
        }
    }).then(({data})=>{
        data.data.map(img => {
            return gifs.push({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            })
        });
    })
    .catch(console.log);

    return gifs;
}