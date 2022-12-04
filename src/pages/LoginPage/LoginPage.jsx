import './login.css';
import logoImg from '../../images/Logo.png';

function LoginPage() {
  return (
    <div className="login">
      <div className="container mt-3 p-4 text-white bg-black w-50">
        <form className="row g-3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={logoImg} className="img-fluid img-user" alt="logo" />
            <h2>
              Make Yourself
              <span className="title">Fit</span>
            </h2>
          </div>

          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <input
              type="email"
              className="form-control text-center"
              id="inputAddress"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <input
              type="password"
              className="form-control text-center"
              id="inputAddress2"
              placeholder="Password"
              required
            />
          </div>
          <div className="col-12  d-flex align-items-center justify-content-center">
            <button type="submit" className="btn-sign w-75 mt-3">
              Login
            </button>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h6>
              Need an account ?
              <a href="/register" className="text-white"> Register</a>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
