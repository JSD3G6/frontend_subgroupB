/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useActivity } from '../../contexts/activityContext';
import { useLoading } from '../../contexts/loadingContext';

const formSchema = Joi.object({
  title: Joi.string().min(3).max(20).label('title')
    .required(),
  dateTime: Joi.date().iso().label('date').required(),
  type: Joi.string()
    .valid('bicycling', 'running', 'hiking', 'walking', 'swimming')
    .label('activity type')
    .required(),
  details: Joi.string().label('details').optional(),
  distanceKM: Joi.number().integer().optional().label('distance'),
  durationMin: Joi.number().integer().required().label('duration')
    .required(),
});

const defaultActivityData = {
  title: '',
  dateTime: '',
  type: 'default',
  details: '',
  distanceKM: '',
  durationMin: '',
};

function CreateActivity() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [formDate, setFormDate] = useState(null);
  const [activityData, setActivityData] = useState(defaultActivityData);
  const ACTIVITY = useActivity();
  const AUTH = useAuth();
  const { startLoading, stopLoading } = useLoading();
  // const dateTimeFo rmatted = AUTH.user.dateTime.split('T')[0];
  const handleInputChange = (event) => {
    const formInputName = event.target.name;
    let formInputValue;

    formInputValue = event.target.value;
    if (formInputName === 'dateTime') {
      const d = new Date(event.target.value);
      setFormDate(d);
    }
    console.log(formInputValue);
    const newActivityData = { ...activityData };
    newActivityData[formInputName] = formInputValue;
    setActivityData(newActivityData);
  };
  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const onCancel = (event) => {
    setFile(null);
    navigate('/');
  };
  console.log('photo', file);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Create activity', activityData);
    const { value, error } = formSchema.validate(activityData);
    if (error) {
      const fieldError = error.details.map((item) => alert(item.message));
    }
    // SEND API TO UPDATE

    navigate('/');
  };
  const createActivityData = async () => {
    // Send Request
    try {
      const newActivityData = activityData;
      console.log(activityData);

      const formData = new FormData();
      formData.append('dateTime', `${activityData.dateTime}T02:00:00.000Z`);
      // eslint-disable-next-line no-restricted-syntax
      for (let key in newActivityData) {
        if (key !== 'dateTime') {
          console.log('KEY', key);
          formData.append(key, newActivityData[key]);
        }
      }
      console.log(`${activityData.dateTime}T02:00:00.000Z`);

      console.log(file);
      if (file) {
        formData.append('photo', file);
      }

      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      startLoading();
      await ACTIVITY.createActivity(formData);
    } catch (error) {
      console.log(error);
    } finally {
      stopLoading();
    }
  };
  const handleOnClick = () => {
    createActivityData();
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <div className="w-[90%] min-w-[360px] lg:max-w-[921px] h-[780px] bg-gray-primary px-[10%] semi-lg:px-[100px] flex flex-col">
        {/* Profile Image */}
        <div className="mx-auto text-center pt-1">
          <h3 className="font-thin text-[40px] text-white">Create New Activity</h3>
        </div>
        {/* input field */}
        <form
          className="h-full py-4 semi-lg:py-8 flex flex-col justify-between"
          onSubmit={handleFormSubmit}
        >
          <div className="hidden semi-lg:flex justify-between gap-8">
            <div className="flex-1 flex flex-col">
              <label className="mb-[0.25rem] text-[1.2rem]">Title</label>
              <input
                type="text"
                // placeholder="Title your activity"
                name="title"
                id="titleInput"
                value={activityData.title}
                onChange={handleInputChange}
                className="input-primary bg-slate-100"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-[0.25rem] text-[1.2rem]">Date</label>
              <input
                type="date"
                // placeholder="Date"
                name="dateTime"
                id="dateTimeInput"
                value={activityData.dateTime}
                onChange={handleInputChange}
                className="input-primary bg-slate-100"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col mt-[1rem]">
            <label className="mt-[1rem] mb-[0.25rem] text-[1.2rem]">Activity Type</label>
            <select
              className="input-primary bg-slate-100"
              name="type"
              id="typeInput"
              value={activityData.type}
              onChange={handleInputChange}
            >
              <option>Select activity type</option>
              <option value="bicycling">Bicycling</option>
              <option value="hiking">Hiking</option>
              <option value="running">Running</option>
              <option value="swimming">Swimming</option>
              <option value="walking">Walking</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col">
            <label className="mt-[1rem] mb-[0.25rem] text-[1.2rem]">Detail</label>
            <input
              type="text"
              // placeholder="Share more about your activity"
              name="details"
              id="detialsInput"
              value={activityData.details}
              onChange={handleInputChange}
              className="input-primary bg-slate-100"
            />
          </div>

          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <div className="flex-1 flex flex-col">
              <label className="mt-[1rem] mb-[0.25rem] text-[1.2rem]">Distance (km)</label>
              <input
                type="number"
                // placeholder="Distance(KM)"
                name="distanceKM"
                id="distanceKMInput"
                value={activityData.distanceKM}
                onChange={handleInputChange}
                className="input-primary bg-slate-100"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mt-[1rem] mb-[0.25rem] text-[1.2rem]">Duration (min)</label>
              <input
                type="number"
                // placeholder="Duration(Min)"
                name="durationMin"
                id="durationMinInput"
                value={activityData.durationMin}
                onChange={handleInputChange}
                className="input-primary bg-slate-100"
              />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-5/6 rounded-lg shadow-xl bg-transparent">
              {!file ? (
                <div>
                  <label className="inline-block mb-2 mt-2 text-[1.2rem] text-white">
                    Upload a photo
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className="flex flex-col w-full h-32 border-4 border-white
                     border-dashed hover:bg-gray-300 hover:border-gray-300"
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
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5
                          5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p
                          className="pt-1 text-sm tracking-wider text-[1rem]
                      text-purple-400 group-hover:text-purple-900"
                        >
                          Attach a file
                        </p>
                      </div>
                      <input
                        type="file"
                        className="opacity-0"
                        name="photo"
                        id="photoInput"
                        value={activityData.photo}
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <img src={URL.createObjectURL(file)} alt="activity pic" className="h-[150px]" />
                </div>
              )}
            </div>
          </div>
          <div className="hidden semi-lg:flex justify-between gap-8 mt-4">
            <button
              type="button"
              className="w-full border-2 text-[1.5rem] border-purple-500 h-[60px] text-white text-xl font-semibold drop-shadow-2xl flex-1"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary self-center flex-1 text-[1.5rem]"
              onClick={handleOnClick}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateActivity;
