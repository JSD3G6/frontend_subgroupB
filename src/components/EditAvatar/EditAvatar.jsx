/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import UploadPhoto from '../UploadPhoto/UploadPhoto';
import './EditAvatar.css';

function EditAvatar() {
  const defaultAvatar = 'https://images.unsplash.com/photo-1626245550585-0b8d640da77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';

  const [imageSrc, setImageSrc] = useState(defaultAvatar);
  const [imageAlt, setImageAlt] = useState('profile');

  const getData = (src, alt) => {
    setImageSrc(src);
    setImageAlt(alt);
  };

  return (
    <div className="edit-avatar-container">
      <img
        className="avatar"
        src={imageSrc || defaultAvatar}
        alt={imageAlt}
      />
      {/* <UploadPhoto userID="123" getData={getData} /> */}
    </div>
  );
}

export default EditAvatar;
