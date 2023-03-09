const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export const getPhotos = async (query) => {
    try{
        if(!query || query=== ""){
            const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=30`);
            const data = await response.json();
            return [...data];
            
        }else{
            const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&per_page=30`);
            const data = await response.json();
            return [...data.results];
        }
    }catch(err){
        alert(`Error while procesing data from api ${err}`)
    }

}