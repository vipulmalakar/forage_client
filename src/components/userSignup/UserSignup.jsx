import React from 'react';
import Input from '../input/Input';
import style from './userSignupStyle.module.css';

function UserSignup() {
	return (
		<div className={style.mainSignup}>
			<div className={style.inputRow}>
				<Input type="text" placeholder="First Name" />
				<Input type="text" placeholder="Last Name" />
			</div>
			<div className={style.inputRow}>
				<Input type="tel" placeholder="Phone Number" />
				<Input type="email" placeholder="Email" />
			</div>
			<div className={style.inputRow}>
				<Input type="password" placeholder="Password" />
				<Input type="password" placeholder="Confirm Password" />
			</div>
		</div>
	);
}

export default UserSignup;
