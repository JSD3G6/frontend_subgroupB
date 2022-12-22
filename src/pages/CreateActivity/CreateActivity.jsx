/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import Joi from 'joi';
import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto_BE';

const formSchema = Joi.object({
  title: Joi.string().min(3).max(20).label('title')
    .required(),
  dateTime: Joi.date().label('date')
    .required(),
  type: Joi.string().valid('bicycling', 'running', 'hiking', 'walking', 'swimming').label('activity type')
    .required(),
  details: Joi.string().label('details').optional(),
  distanceKM: Joi.number().integer().optional().label('distance'),
  durationMin: Joi.number().integer().required().label('duration')
    .required(),
  photo: Joi.string().label('photo').optional(),
});

const defaultActivityData = {
  title: '',
  dateTime: '',
  type: 'default',
  details: '',
  distanceKM: '',
  durationMin: '',
  photo: '',
};

function CreateActivity() {
  const [activityData, setActivityData] = useState(defaultActivityData);
  const AUTH = useAuth();
  // const dateTimeFo rmatted = AUTH.user.dateTime.split('T')[0];
  const handleInputChange = (event) => {
    const formInputName = event.target.name;
    const formInputValue = event.target.value;
    const newActivityData = { ...activityData };
    newActivityData[formInputName] = formInputValue;
    setActivityData(newActivityData);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Create activity', activityData);
    const { value, error } = formSchema.validate(activityData);
    if (error) {
      const fieldError = error.details.map((item) => alert(item.message));
    }
  };
  const createActivityData = async () => {
    // Send Request
    try {
      const newActivityData = activityData;
      console.log('Kodlnw', newActivityData);
      const formData = new FormData();
      // eslint-disable-next-line no-restricted-syntax
      for (const key in newActivityData) {
        formData.append(key, newActivityData[key]);
        console.log('lnwza', key);
      }
      await AUTH.createActivity(newActivityData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClick = () => {
    createActivityData();
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <div className="w-[90%] min-w-[360px] lg:max-w-[921px] h-[780px] rounded-[10px] bg-gray-primary px-[10%] semi-lg:px-[100px] flex flex-col">
        {/* Profile Image */}
        <div className="mx-auto text-center pt-8">
          <h3 className="font-thin text-[40px] text-white">Create New Activity</h3>
        </div>
        {/* input field */}
        <form className="h-full py-4 semi-lg:py-8 flex flex-col justify-around " onSubmit={handleFormSubmit}>
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <input
              type="text"
              placeholder="Title your activity"
              name="title"
              id="titleInput"
              value={activityData.title}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
            <input
              type="date"
              placeholder="Date"
              name="dateTime"
              id="dateTimeInput"
              value={activityData.dateTime}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
          </div>
          <select className="input-primary" name="type" id="typeInput" value={activityData.type} onChange={handleInputChange}>
            <option>Select activity type</option>
            <option value="bicycling">Bicycling</option>
            <option value="hiking">Hiking</option>
            <option value="running">Running</option>
            <option value="swimming">Swimming</option>
            <option value="walking">Walking</option>
          </select>
          <input
            type="text"
            placeholder="Share more about your activity"
            name="details"
            id="detialsInput"
            value={activityData.details}
            onChange={handleInputChange}
            className="input-primary"
          />
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <input
              type="number"
              placeholder="Distance"
              name="distanceKM"
              id="distanceKMInput"
              value={activityData.distanceKM}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
            <input
              type="number"
              placeholder="Duration"
              name="durationMin"
              id="durationMinInput"
              value={activityData.durationMin}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
          </div>
          <div className="flex justify-center">
            <div className="w-5/6 rounded-lg shadow-xl bg-transparent">
              <div>
                <label className="inline-block mb-2 text-gray-400">Upload a photo</label>
                <div className="flex items-center justify-center w-full">
                  <label
                    className="flex flex-col w-full h-32 border-4 border-white border-dashed hover:bg-gray-300 hover:border-gray-300"
                  >
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-purple-400 group-hover:text-gray-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-purple-400 group-hover:text-purple-900">
                        Attach a file
                      </p>
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      name="photo"
                      id="photoInput"
                      value={activityData.photo}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <button type="submit" className="w-full border-2 border-purple-500 h-[60px] rounded-[10px] text-white text-xl font-semibold drop-shadow-2xl flex-1">Cancel</button>
            <button type="submit" className="btn-primary self-center flex-1" onClick={handleOnClick}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateActivity;
