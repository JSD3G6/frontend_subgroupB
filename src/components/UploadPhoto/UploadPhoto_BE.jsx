/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import axios from '../../services/axios';
import ButtonPurpleUpLoad from '../buttons/ButtonPurpleUpLoad';
import { useAuth } from '../../contexts/authContext';

function UploadPhoto({
  file, setFile, inputFileRef, userID,
}) {
  const AUTH = useAuth();
  const onChangeFile = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const onSaveFile = async () => {
    // Send Request
    try {
      const formData = new FormData();
      formData.append('profilePhoto', file);
      await AUTH.updateUserProfile(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setFile(null);
    }
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
