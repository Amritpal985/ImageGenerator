import React, { useState } from 'react';
import "./download.css";


function ImageDownloadPage(props) {
  const [imageUrl, setImageUrl] = useState('');

  // Function to handle image download
  const handleDownloadImage = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'generated-image.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <h1>Image Download Page</h1>
      <img src={imageUrl} alt="Generated Image" />
      <button onClick={handleDownloadImage}>Download Image</button>
    </div>
  );
}

export default ImageDownloadPage;
