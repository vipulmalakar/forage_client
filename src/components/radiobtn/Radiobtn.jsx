import React from 'react';
import style from './radiobtnStyle.module.css';

function Radiobtn(props) {
	return (
		<label className={style.btnContainer}>
			<input type="radio" checked={props.checked} name={props.name} required />
			<span>{props.role}</span>
		</label>
	);
}

export default Radiobtn;
