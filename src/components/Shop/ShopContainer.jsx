import React from 'react';
import { connect } from "react-redux";
import Shop from './Shop';
import {AddNewCreator} from './ReducerShop';

let mapStateToProps = (state) => {
	return {
		products: state.ShopsData.Products
	}
}

let mapDispatchToProps = (dispatch) => {
	return{
		addProducts: (pictUser,priceUser,desUser,quanUser) => {
			dispatch(AddNewCreator(pictUser,priceUser,desUser,quanUser));
		}
	}
}


const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;
