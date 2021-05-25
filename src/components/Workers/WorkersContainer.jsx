import React from 'react';
import { connect } from "react-redux";
import Workers from './Workers';
import {AddNewWorker} from './ReducerWorkers';

let mapStateToProps2 = (state) => {
	return{
		WorkMan: state.WorkersData.WorkMan
	}
}

let mapDispatchToProps2 = (dispatch) => {
	return{
		addWorker: (photoUser,nameUser) => {
			dispatch(AddNewWorker(photoUser,nameUser));
		}
	}
}

const WorkersContainer = connect(mapStateToProps2, mapDispatchToProps2)(Workers);

export default WorkersContainer;
