import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './PhotosStyle.css';
import { createApi } from 'unsplash-js';
import PhotoGallery from './PhotoGallery';

const unsplash = createApi({
  accessKey: 'HmkoipsbzjqX9KXdXTGZ1tioG9kLTtrW56q4hLiJCn8',
  headers: { 'X-Custom-Header': 'foo' },
});

const FeaturePḥotos = (props) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore,sethasMore]=useState(true);

  const fetchPhotos = () => {
    // Fetch data from Unsplash API
    unsplash.search.getPhotos({
        query: props.query,
        page: page,
        perPage: 20,
      }).then(result => {
      console.log(result)
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
      } 
      else{
        const newPhotos = result.response.results.map(photo => ({
          id: photo.id,
          imageUrl: photo.urls.regular,
          downloadUrl: photo.links.html,
          photographer: {
            name: photo.user.first_name || 'Unknown',
            profileLink: photo.user.links.html,
          },
        })
        );
        console.log(result.response.results.length)
        if(result.response.results.length<4){
            sethasMore(false)
        }
        // Update the state with new photos
        setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
  
        // Increment the page for the next fetch
        setPage(page + 1);
      }

    });
  };

  useEffect(() => {
    setPhotos([]);
    setPage(1);
    sethasMore(true);

    // Fetch new photos based on the updated query
    fetchPhotos();
  }, [props.query]);
   // The empty dependency array ensures that the effect runs once when the component mounts
   const uniquePhotos = Array.from(new Set(photos.map(photo => photo.id)))
    .map(id => photos.find(photo => photo.id === id));
  return (
    <div className='container'>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {
          <PhotoGallery photos={uniquePhotos} />
        }
      </InfiniteScroll>
    </div>
  );
};

export default FeaturePḥotos;
