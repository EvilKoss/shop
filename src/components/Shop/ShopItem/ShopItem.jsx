import React from 'react';
import style from './ShopItem.module.css';

const ShopItem = (props) => {
	return (
		<div>
			<img className={style.img} src={props.pic}/>
			<div>Цена: {props.price}</div>
			<div>Количество: {props.quan}</div>
			<div>Описание: {props.desc}</div>
		</div>
	)
}

export default ShopItem;
