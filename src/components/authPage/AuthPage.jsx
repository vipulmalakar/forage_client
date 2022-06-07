import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import style from './AuthPageStyle.module.css';
import Forgot from '../Forgot/Forgot';
import EmailSent from '../emailSent/EmailSent';
import Signup from '../signup/Signup';
import MainPage from '../mainPage/MainPage';
import Error404 from '../error404/Error404';
function AuthPage() {
	return (
		<div className={style.mainpage}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Dashboard" element={< MainPage />} />
				<Route path="/forgotpassword" element={<Forgot />} />
				<Route path="/emailsent" element={<EmailSent />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		
		</div>
	);
}

export default AuthPage;
