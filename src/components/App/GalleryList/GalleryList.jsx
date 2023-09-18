import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

// import './GalleryList.css';

function GalleryList({galleryList, getGalleryItems}){
    console.log('in the function gallery list in gallery list', galleryList);

return (
    <>
    <div className= "list-div">
    {galleryList.map((item) => (
        <GalleryItem
        key={item.id}
        item={item}
        getGalleryItems={getGalleryItems}
        />
        ))}
    </div>
    </>
    )
}
export default GalleryList;