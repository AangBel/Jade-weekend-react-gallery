import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
// import './GalleryList.css';

function GalleryList({galleryList, getGalleryItems}){
    console.log('in the function gallery list in gallery list', galleryList);

return (
    <>
    <div>
        {/*  Does the path, desc, likes go here? */}
    {galleryList.map((item) => (
        <GalleryItem
        key={item.id}
        // path={item.path}
        // description={item.description}
        // likes={item.likes}
        item={item}
        getGalleryItems={getGalleryItems}
        />
        ))}
    </div>
    </>
    )
}
export default GalleryList;