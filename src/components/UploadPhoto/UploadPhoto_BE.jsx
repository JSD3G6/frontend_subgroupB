/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import ButtonPurple from '../buttons/ButtonPurple';

function UploadPhoto() {
  const handleOnClick = () => {
    // widgetRef.current.open();
  };

  return (
    <div>
      <ButtonPurple text="Edit Photo" onClick={handleOnClick} type="file" />
    </div>
  );
}

export default UploadPhoto;
