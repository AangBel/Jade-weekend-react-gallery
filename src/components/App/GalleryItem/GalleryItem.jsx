import React, { useState } from 'react';
import axios from 'axios';
// import GalleryList from '../GalleryList/GalleryList';

function GalleryItem({ item, getGalleryItems }) {
    console.log('in GalleryItem fn of GalleryItem file');

    const [showDescription, setShowDescription] = useState(false);
    const [likes, setLikes] = useState(item.likes);

    const handleLike = () => {
    axios.put(`/gallery/like/${item.id}`)
        .then((response) => {
            console.log('this is the response from the gallery item file', response);
            // TODO not sure if the line below goes here
            getGalleryItems();
        setLikes(response.data.likes);
    })
    .catch((error) => {
        console.error('Error liking the image:', error);
    });
};

const toggleDescription = () => {
    setShowDescription(!showDescription);
}

// const photo = () => {
// let status;
// if(){
// status = <p>{item.description}</p>
// }else {
// status = <img src = {item.path}/>
// }
// }

return (
    <>
    <div className="gallery-item">
        {showDescription ? (
            <p 
                onClick={toggleDescription}
                >
                {item.description}
                </p>
        ) : (
            <img src={item.path} 
            alt={item.description} 
            onClick={toggleDescription} />
        )}

        <p>Likes: {likes}</p>

        <button onClick={handleLike}>Like</button>
    </div>
    </>
);
}

export default GalleryItem;
