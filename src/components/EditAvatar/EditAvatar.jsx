/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import UploadPhoto from '../UploadPhoto/UploadPhoto_BE';
import './EditAvatar.css';

function EditAvatar() {
  const defaultAvatar = 'https://images.unsplash.com/photo-1626245550585-0b8d640da77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';

  const [file, setFile] = useState(null);

  // const getData = (src, alt) => {
  //   setImageSrc(src);
  //   setImageAlt(alt);
  // };
  // file ? URL.createObjectURL(file) : profileImage
  if (file) {
    console.log(URL.createObjectURL(file));
  }

  return (
    <div className="edit-avatar-container">
      <img
        className="avatar"
        src={file ? URL.createObjectURL(file) : defaultAvatar}
        alt="profile-image"
      />
      <UploadPhoto userID="123" file={file} setFile={setFile} />
    </div>
  );
}

export default EditAvatar;
