// import React from 'react';
import { useParams } from 'react-router-dom';

function EditActivity() {
  const { activityId } = useParams();
  console.log('PARAM IN EDIT ACTIVITY PAGE', activityId);
  return <div>EditActivity</div>;
}

export default EditActivity;
