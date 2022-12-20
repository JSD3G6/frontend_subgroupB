/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useMyContext } from '../../Context/Context';
import ButtonPurpleUpLoad from '../buttons/ButtonPurpleUpLoad';

function UploadPhoto({ file, setFile, userID }) {
  const { updateUserProfile, user, setUser, auth } = useMyContext();
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` },
  };
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
      const res = await axios.patch(`http://localhost:8000/profile/${auth.userId}`, formData);
      const newProfile = res.data.profile;
      // setUser(newProfile);
      console.log(newProfile, 'updated');
    } catch (error) {
      console.log(error);
    } finally {
      setFile(null);
    }
  };
  const onCanCelFile = () => {
    setFile(null);
  };
  return (
    <div>
      <ButtonPurpleUpLoad
        text="Edit Photo"
        file={file}
        onChangeFile={onChangeFile}
        onSaveFile={onSaveFile}
        onCanCelFile={onCanCelFile}
        // inputFileRef={inputFileRef}
      />
    </div>
  );
}

export default UploadPhoto;
