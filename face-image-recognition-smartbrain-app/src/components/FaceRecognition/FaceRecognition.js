import React from "react";
//import App from "clarifai/dist/App";
//import App from "../../App";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center'>
      <img alt='' src={imageUrl} />
    </div>
  );
}

export default FaceRecognition;
