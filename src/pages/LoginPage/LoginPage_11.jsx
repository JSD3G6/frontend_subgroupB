/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable prefer-regex-literals */
import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import Joi from 'joi';
import BackgroundImage from '../../assets/bg-1.png';
import LoginLogo from '../../assets/login-logo.png';

// import GmailLogo from '../../assets/gmail.png';
// import FacebookLogo from '../../assets/facebook.png';
import { AuthContext } from '../../contexts/authContext';
import { useLoading } from '../../contexts/loadingContext';

const formSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .label('Email')
    .required(),

  password: Joi.string().label('Password').required(),
});

function LoginPage() {
  const AUTH = useContext(AuthContext);
  const { startLoading, stopLoading } = useLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (event) => {
    event.preventDefault(); // กัน Default Action Form
    // console.log('TRY TO SUBMIT');
    // Validate FrontEnd
    const { error } = formSchema.validate({ email, password });
    if (error) {
      error.details.map((item) => alert(item.message));
      // alert('Please enter a valid email address and password');
      // console.error(error.details);
    }

    try {
      startLoading(); // loading == true
      await AUTH.login({ email, password });
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100vw',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div className="flex justify-center items-center" style={backgroundStyle}>
      <div className="w-[60%] min-w-[360px] lg:max-w-[921px] h-[780px] bg-gray-primary   px-[10%] semi-lg:px-[100px] flex flex-col">
        {/* Profile Image */}
        <div className="mx-auto text-center pt-8">
          <div className="flex mb-1 mx-auto">
            <img src={LoginLogo} alt="login-logo" className="w-[130px] mx-auto" />
          </div>
          <h3 className="font-thin text-[40px] text-white">EliteMove</h3>
        </div>
        {/* Desktop : Email & Password */}
        <form
          className="h-full py-4 semi-lg:py-4 flex flex-col justify-between"
          onSubmit={submitLogin}
        >
          <div className="flex-1 flex flex-col">
            <label className="mt-[1rem] mb-[0.25rem] text-[1.2rem]">Email</label>
            <input
              type="text"
              // placeholder="Enter your Email"
              name="Email"
              className="input-primary bg-slate-100"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="mt-[1rem] mb-[0.25rem] text-[1.2rem]">Password</label>
            <input
              type="password"
              // placeholder="Password"
              name="Password"
              className="input-primary bg-slate-100"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="flex-1 flex flex-col">
            {' '}
            <button
              type="submit"
              className="btn-primary font-medium self-center text-[1.5rem] my-4"
            >
              Login
            </button>
            <p className="text-white text-[1.3rem] my-2 self-center">OR</p>
            <Link
              to="/register"
              className="text-purple-p-500 hover:text-purple-100 mb-8 px-8 py-2 font-thin text-[32px] self-center shadow-md shadow-[0_0_4px_3px_rgba(131, 34, 254, 0.5)]"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
