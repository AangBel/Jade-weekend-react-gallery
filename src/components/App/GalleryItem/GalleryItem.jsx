import React, { useState } from 'react';
import axios from 'axios';
import "./GalleryItem.css";
// import GalleryList from '../GalleryList/GalleryList';

function GalleryItem({ item, getGalleryItems }) {
    console.log('in GalleryItem fn of GalleryItem file');

    const [showDescription, setShowDescription] = useState(false);
    // const [clicked, setClick] = useState(true);
    const [likes, setLikes] = useState(item.likes);

    const handleLike = () => {
    axios.put(`/gallery/like/${item.id}`)
        .then((response) => {
            console.log('this is the response from the gallery item file', response);
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


return (
    <>

    <div className='gallery-item'>
        {showDescription ? (
            <p 
                onClick={toggleDescription}
                >
                {item.description}
                </p>
        ) : (
            <img 
            className='picture'
            src={item.path} 
            alt={item.description} 
            onClick={toggleDescription} />
        )}

        <p>Likes: {item.likes}</p>

        <button id ="likeBtn" onClick={handleLike}>🩵</button>
</div>
    </>
);
}

export default GalleryItem;
