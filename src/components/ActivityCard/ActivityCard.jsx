/* eslint-disable */
import './ActivityCard.css';
import ActivityImage from '../../images/activitycard-img.png';
import Edit from '../../images/edit.png';
import Delete from '../../images/delete.png';

function ActivityCard() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-sm-3 col-12">
          <img className="img-fluid img" src={ActivityImage} alt="" />
        </div>
        <div className="col-sm-9 col-12 bg-dark text-white">
          <div className="fw-bolder d-flex justify-content-between">
              <h3 className="p-2">Title your activity</h3>
              <div className="justify-content-between p-2">
            <img src={Edit} alt="edit" className="img-edit p-2" />
            <img src={Delete} alt="delete" className="img-edit p-2" />
            </div>
          </div>
          <div className="ActC-info d-flex ">
            <div>
              <p className="ActC-date p-2">Date : yyyy/mm/dd</p>
              <p className="ActC-type p-2">Type : running</p>
            </div>
            <div>
              <p className="ActC-distance p-2">Distance : 00 km.</p>
              <p className="ActC-Duration p-2">Duraion : 00 min.</p>
            </div>
          </div>
          <p className="ActC-shered">
            Shared more about your activity
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor cursus enim at malesuada. Praesent vitae sem interdum, semper
            sapien vitae, placerat metus. Cras sit amet ex sem. Fusce aliquet,
            nibh a venenatis scelerisque, orci.orem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas tempor cursus enim at
            malesuada. Praesent vitae sem interdum, semper sapien vitae,
            placerat metu
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
export default ActivityCard;
