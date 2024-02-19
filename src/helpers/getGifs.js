export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=phyv1KobG8a98kLYo148px32t24v1eWg&q=${category}&limit=10`;
    const res = await fetch(url);
    //para reconocer que la data tenga info
    //const { data =[] } = await res.json();
    const { data } = await res.json();

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    
    //console.log(gifs.map(gif => gif.title), 'gifs');
    return gifs;
  }