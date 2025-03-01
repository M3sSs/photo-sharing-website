import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './PhotosStyle.css';
import { createApi } from 'unsplash-js';
import PhotoGallery from './PhotoGallery';

const unsplash = createApi({
  accessKey: 'HmkoipsbzjqX9KXdXTGZ1tioG9kLTtrW56q4hLiJCn8',
  headers: { 'X-Custom-Header': 'foo' },
});

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPhotos = () => {
    unsplash.photos
      .getRandom({
        count: 30,
      })
      .then((result) => {
        if (result.errors) {
          console.error('Error occurred: ', result.errors[0]);
        } else {
          const newPhotos = result.response.map((photo) => ({
            id: photo.id,
            imageUrl: photo.urls.regular,
            downloadUrl: photo.links.html,
            photographer: {
              name: photo.user.first_name || 'Unknown',
              profileLink: photo.user.links.html,
            },
          }));

          // Check if fewer than 30 images were fetched
          if (newPhotos.length < 30) {
            setHasMore(false);
          }

          setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
        }
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const uniquePhotos = Array.from(new Set(photos.map((photo) => photo.id))).map(
    (id) => photos.find((photo) => photo.id === id)
  );

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={uniquePhotos.length}
        next={fetchPhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <PhotoGallery photos={uniquePhotos} />
      </InfiniteScroll>
    </div>
  );
};

export default Photos;
