import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './PhotosStyle.css';
import { createApi } from 'unsplash-js';
import PhotoCard from './PhotoCard';

const unsplash = createApi({
  accessKey: 'HmkoipsbzjqX9KXdXTGZ1tioG9kLTtrW56q4hLiJCn8',
  headers: { 'X-Custom-Header': 'foo' },
});

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPhotos = () => {
    // Fetch data from Unsplash API
    unsplash.photos.getRandom({
      count: 30,
      page: page,
    }).then(result => {
      console.log(result)
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
      } 
      else{
        const newPhotos = result.response.map(photo => ({
          id: photo.id,
          imageUrl: photo.urls.full,
        }));

        // Update the state with new photos
        setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
  
        // Increment the page for the next fetch
        setPage(page + 1);
      }

    });
  };

  useEffect(() => {
    fetchPhotos();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className='container'>
      <h1>Photo Sharing Website</h1>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {photos.map(photo => (
          <PhotoCard key={photo.id} imageUrl={photo.imageUrl} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Photos;
