import React, { useState } from 'react';

const Gallery = ({content, images}) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="container">
      <h2>{content}</h2>
      <div className="gallery">
        {images ? (
          // If images prop is provided, map through them
          images.map(([image,code,name] ,index) => (
          <div key={index} className='imgs'>
            <div className="ph" onClick={() => openFullscreen(image)}>
              <img src={image} alt={`Gallery Image ${index + 1}`}/>
            </div>
            <div>
            <p style={{color:"#b70807",textAlign:"center",fontWeight: "bold"}}>{code}</p></div>
            <div>
            <p style={{textAlign:"center"}}>{name}</p></div>
          </div>
          ))
        ) : (
          <h1>No Images For Display</h1>
          // 
          // <>
          //   <div className="ph">
          //     <img src="logo.PNG" alt="Company Logo" />
          //   </div>
          //   <div className="ph">  
          //     <img src="logo.PNG" alt="Company Logo" />
          //   </div> 
          //   <div className="ph">
          //     <img src="logo.PNG" alt="Company Logo" />
          //   </div>
          //   <div className="ph">
          //     <img src="logo.PNG" alt="Company Logo" />
          //   </div>
          //   <div className="ph">
          //     <img src="logo.PNG" alt="Company Logo" />
          //   </div>
          //   <div className="ph"></div>
          // </>
        )}
      </div>
      
      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div className="fullscreen-content">
            <img src={fullscreenImage} alt="Fullscreen" />
            <button className="close-btn" onClick={closeFullscreen}>×</button>
          </div>
        </div>
      )}
      
      <p style={{color:'var(--muted)',marginTop:'20px'}}></p>
    </section>
  );
};

export default Gallery; 