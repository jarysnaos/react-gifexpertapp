const apiKey='CRK8PTtK8th28hZkucEQtQMZ2Tg8EQuc';
//https://api.giphy.com/v1/gifs/search?api_key=CRK8PTtK8th28hZkucEQtQMZ2Tg8EQuc&q=xxx&limit=25&offset=0&rating=g&lang=en
export const getGifs =  async(category) => {
    console.log(category);
    
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id:img.id,
            title:img.title,
            username:img.username,
            url:img.images.downsized_medium.url
        }
    })
    //console.log(gifs);
    return gifs;
}