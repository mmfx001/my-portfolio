import React, { useState, useEffect } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        setPhotos(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

 
  return (
    <div>
      <h1>Rasmlar</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ width: '150px' }}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
