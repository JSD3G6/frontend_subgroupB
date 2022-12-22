import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ActAPI from '../../api/activityApi';

function EditActivity() {
  const { activityId } = useParams();
  const [activity, setActivity] = useState({});
  const getActivityById = async () => {
    const res = await ActAPI.getActivity(activityId);
    const data = res.data.activityDetail;
    setActivity(data);
  };

  useEffect(() => {
    getActivityById();
  }, []);

  console.log(activity);
  console.log('PARAM IN EDIT ACTIVITY PAGE', activityId);
  return <div>EditActivity</div>;
}

export default EditActivity;
