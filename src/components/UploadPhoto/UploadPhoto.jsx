/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import ButtonPurple from '../buttons/ButtonPurple';

function UploadPhoto({ userID, getData }) {
  const cloudName = 'difgpeulb';
  const uploadPreset = 'a21sg5jp';
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        cropping: true, // add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        multiple: false, // restrict upload to a single file
        folder: `${userID}-profile-images`, // upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        context: { alt: 'user_uploaded' }, // add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        maxImageFileSize: 2000000, // restrict file size to less than 2MB
        maxImageWidth: 400, // Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // console.log("Done! Here is the image info: ", result.info);

          getData(result.info.secure_url, result.info.context.custom.alt);
        }
      },
    );
  }, []);
  const handleOnClick = () => {
    widgetRef.current.open();
  };

  return (
    <div>
      <ButtonPurple text="Edit Photo" onClick={handleOnClick} />
    </div>
  );
}

export default UploadPhoto;
