const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export const getPhotosCarousel = async () => {
    try{
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=5`);
        const data = await response.json();
        return [...data];
    }catch(err){
        alert(`Error while procesing data from api ${err}`);
    };
};