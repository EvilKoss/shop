import React from 'react';
import style from './Shop.module.css';
import ShopItem from './ShopItem/ShopItem'
import {createRef} from 'react';

const Shop = (props) => {
	let image = createRef();
	let description = createRef();
	let quantity = createRef();
	let price = createRef();

	let addClick = () => {
		props.addProducts(image.current.value,description.current.value,quantity.current.value,price.current.value);
		image.current.value = "";
		description.current.value="";
		quantity.current.value="";
		price.current.value="";
		image.current.focus();
	}

	let list = [];
	let i = 0;
	let totalPrice = 0;
	while(i < props.products.length){
		let pic = props.products[i].pictures;
		let desc = props.products[i].description;
		let quan = props.products[i].quantity;
		let price = props.products[i].price;
		list.push(<ShopItem pic={pic} desc={desc} quan={quan} price={price}/>);
		totalPrice += quan * price;
		i++;
	}
	return(
		<div className={style.Shop}>
			<div>общая сумма: </div><br />
			<button onClick={addClick}>добавить позицыю</button>
			<input ref={image} type="text" placeholder="Введите ссылку на картинку товара" />
			<input ref={description} type="text" placeholder="Введите описание товара" />
			<input ref={quantity} type="number" placeholder="Введите количество товара" />
			<input ref={price} type="number" placeholder="Введите стоимость товара" /><br /><br />
			{list}
		</div>
	)
}

export default Shop;
