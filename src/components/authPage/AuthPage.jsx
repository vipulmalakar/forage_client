import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import SideImage from '../sideImage/SideImage';
import style from './AuthPageStyle.module.css';
import Forgot from '../Forgot/Forgot';
import EmailSent from '../emailSent/EmailSent';
import Signup from '../signup/Signup';
import Error404 from '../error404/Error404';

function AuthPage() {
	return (
		<div className={style.mainpage}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/forgotpassword" element={<Forgot />} />
				<Route path="/emailsent" element={<EmailSent />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<SideImage />
		</div>
	);
}

export default AuthPage;
