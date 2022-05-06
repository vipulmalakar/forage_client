import React from 'react';
import Radiobtn from '../radiobtn/Radiobtn';
import Logo from '../logo/Logo';
import Button from '../button/Button';
import style from './signupStyle.module.css';
import FormFooter from '../formFooter/FormFooter';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import UserSignup from '../userSignup/UserSignup';
import NgoSignup from '../ngoSignup/NgoSignup';

function Signup() {
	const submitSignupForm = (e) => {
		e.preventDefault();
	};
	return (
		<div className={style.signupContainer}>
			<p className={style.signupHeader}>Sign Up to</p>
			<Logo />
			<form
				action="/registerUser"
				method="post"
				className={style.signupForm}
				onSubmit={submitSignupForm}
			>
				<div className={style.rbtns}>
					<Radiobtn name="role-select" role="User" />
					<Radiobtn name="role-select" role="NGO" />
				</div>
				<UserSignup />
				{/* <NgoSignup /> */}

				<Button type="submit" value="Sign Up" />
			</form>
			<Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
				<FormFooter statement="Already have an account ? " link="Log in" />
			</Link>
			<Outlet />
		</div>
	);
}

export default Signup;
