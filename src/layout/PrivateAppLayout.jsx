/* eslint-disable max-len */
import { Outlet } from 'react-router-dom';
import { useLoading } from '../contexts/loadingContext';

function PrivateAppLayout() {
  console.log(useLoading());
  const { loading } = useLoading();

  return (
    <div className="w-full h-screen relative">
      <Outlet />
      {loading && (
        <div className="loader-container">
          <div className=" loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24" />
        </div>
      )}
    </div>
  );
}

export default PrivateAppLayout;
