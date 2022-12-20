/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import ButtonPurpleUpLoad from '../buttons/ButtonPurpleUpLoad';

function UploadPhoto({ file, setFile, inputFileRef }) {
  const onChangeFile = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const onSaveFile = () => {
    setFile(null);
  };
  const onCanCelFile = () => {
    setFile(null);
  };
  console.log(file);
  return (
    <div>
      <ButtonPurpleUpLoad
        text="Edit Photo"
        file={file}
        onChangeFile={onChangeFile}
        onSaveFile={onSaveFile}
        onCanCelFile={onCanCelFile}
        inputFileRef={inputFileRef}
      />
    </div>
  );
}

export default UploadPhoto;
