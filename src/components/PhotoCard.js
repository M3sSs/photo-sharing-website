import React, { useState } from 'react';
import './PhotoCardstyle.css';

export default function PhotoCard({ imageUrl, downloadUrl, photographer }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    // Ensure the modal closes only when clicking on the overlay
    if (e.target.className === 'modal-overlay') {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Image Thumbnail */}
      <div className="photo-card" onClick={handleOpenModal}>
        <img src={imageUrl} alt="Gallery Item" />
      </div>

      {/* Modal with Full Image and Download Button */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={imageUrl} alt="Full Size" />
            <div className="modal-footer">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                Download
              </a>
              <p className="attribution">
                Photo by{' '}
                <a
                  href={photographer.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {photographer.name}
                </a>{' '}
                on{' '}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
