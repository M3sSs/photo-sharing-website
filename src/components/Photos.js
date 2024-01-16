
import React, { useState, useEffect } from 'react';
import './PhotosStyle.css';
import { createApi } from 'unsplash-js';
import PhotoCard from './PhotoCard';

const unsplash = createApi({
  accessKey: 'HmkoipsbzjqX9KXdXTGZ1tioG9kLTtrW56q4hLiJCn8',
  headers: { 'X-Custom-Header': 'foo' },
});

const Photos = () => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    // Fetch data from Unsplash API
    unsplash.photos.getRandom({
      count: 6,
    }).then(result => {
      const imageUrl = result.response[0].urls.full;
      console.log(result);
      console.log(imageUrl);

      // Set the received URL in the state
      setUrl(imageUrl);
    });
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <header className='container'>
      <h1>Photo Sharing Website</h1>
      <PhotoCard imageUrl={url}/>
    </header>
  );
};

export default Photos;
