import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from './GalleryList/GalleryList';


// TODO where do we use GalleryItem in here????
import GalleryItem from './GalleryItem/GalleryItem';



function App() {
  console.log('in app.jsx running in app function');

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGalleryItems()
  }, []);

  const getGalleryItems = () => {
    axios.get('/gallery')
    .then((response) => {
    console.log(response.data);
    setGalleryList(response.data)
  })
  .catch((error) => {
    console.error('error fetching gallery', error);
  });
}
      return (
        <div id="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Drawings</h1>
          </header>
          <div className='box'>
            {/* <div className='list-div'> */}
              <GalleryList galleryList={galleryList} getGalleryItems={getGalleryItems} />
            {/* </div> */}
          </div>
        </div>
      );
}

export default App;
