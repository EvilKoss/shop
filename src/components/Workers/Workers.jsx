import React from 'react';
import style from './Workers.module.css';
import {createRef} from 'react';
import WorkersItem from './WorkersItem/WorkersItem'

const Workers = (props) => {
	let photo = createRef();
	let name = createRef();

	let addClickW = () => {
		props.addWorker(photo.current.value,name.current.value);
		photo.current.value = "";
		name.current.value="";
		photo.current.focus();
	}
	let aList = [];
	let i = 0;
	while(i < props.WorkMan.length){
		let pho = props.WorkMan[i].photo;
		let nam = props.WorkMan[i].name;
		aList.push(<WorkersItem pho={pho} nam={nam}/>);
		i++;
	}
	return(
		<div className={style.Work}>
			<button onClick={addClickW}>добавить работника</button>
			<input ref={photo} type="text" placeholder="Введите ссылку на фотографию" />
			<input ref={name} type="text" placeholder="Введите имя работника" /><br /><br />
			{aList}
		</div>
	)
}

export default Workers;
