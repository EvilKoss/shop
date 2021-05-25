import React from 'react';
import style from './WorkersItem.module.css';

const WorkersItem = (props) => {
	return(
		<div>
			<img className={style.img} src={props.pho}/>
			<div>Имя: {props.nam}</div>
		</div>
	)
}

export default WorkersItem;
