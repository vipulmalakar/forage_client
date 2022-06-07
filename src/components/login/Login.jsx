import SideImage from '../sideImage/SideImage';
import React from 'react';
import style from './loginStyle.module.css';
import { Link } from 'react-router-dom';
import Input from '../input/Input';
import Button from '../button/Button';
import FormFooter from '../formFooter/FormFooter';
import Logo from '../logo/Logo';
function Login() {

	const submitLoginForm = (e) => {
		e.preventDefault();

	};
	return (
		<>
		<div className={style.formContainer}>
			{/* FORM HEADER */}
			<div className={style.formHeader}>
				<p className={style.loginGreet}>Welcome to</p>
				<Logo />
				<p className={style.formSlogan}>Login to make the difference</p>
			</div>
			{/* FORM HEADER */}

			{/* LOGIN FORM */}
			<form
				action="/login"
				method="post"
				className={style.loginForm}
				onSubmit={submitLoginForm}
			>
				<Input id="login-email" type="email" placeholder="Email" />
				<Input id="login-password" type="password" placeholder="Password" />
				<div className={style.forgot}>
					<Link
						to="/forgotpassword"
						style={{ color: 'inherit', textDecoration: 'inherit' }}
					>
						<p>Forgot Password ?</p>
					</Link>
				</div>
				<Button type="submit" value="LOG IN"  />
			</form>
			{/* LOGIN FORM */}

			<Link
				to="/signup"
				style={{ color: 'inherit', textDecoration: 'inherit' }}
			>
				<FormFooter statement="Don't have an account ? " link="Sign Up Now" />
			</Link>
		</div>
		<SideImage />
		</>
	);
}

export default Login;
