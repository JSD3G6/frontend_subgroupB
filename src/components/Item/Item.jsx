import LineChart from '../LineChart/LineChart';
import './item.css';

function Item() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="d-flex flex-column align-items-center col-xl-3 col-md-6 col-12 order-1 order-md-1 order-xl-1">
          <h1>UserInformation</h1>
        </div>
        <div className="d-flex flex-column align-items-center col-xl-5 col-md-12 col-12 order-3 order-md-3 order-xl-2">
          <h1>Create Activity</h1>
        </div>
        <div className="d-flex flex-column align-items-center col-xl-4 col-md-6 col-12 order-2 order-md-2 order-xl-3">
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex flex-column align-items-center">
              <h6>Distance</h6>
              <h6>0 km</h6>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h6>Time</h6>
              <h6>0 Hr</h6>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h6>Calories</h6>
              <h6>0 cal</h6>
            </div>
            <div className="d-flex flex-column align-items-center mb-2">
              <select>
                <option value="bicycling">bicycling</option>
                <option value="hiking">hiking</option>
                <option value="running">running</option>
                <option value="walking">walking</option>
                <option value="swimming">swimming</option>
              </select>
              <div className="d-flex w-100">
                <button type="button" className="w-100">W</button>
                <button type="button" className="w-100">M</button>
                <button type="button" className="w-100">Y</button>
              </div>
            </div>
          </div>
          <LineChart />
          <h1>Type</h1>
        </div>
      </div>
    </div>
  );
}

export default Item;
