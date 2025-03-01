import React from 'react';
import PhotoCard from './PhotoCard';
import './GalleryStyle.css';

export default function PhotoGallery({ photos }) {
  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          imageUrl={photo.imageUrl}
          downloadUrl={photo.downloadUrl}
          photographer={photo.photographer} // Fixed this line
        />
      ))}
    </div>
  );
}
