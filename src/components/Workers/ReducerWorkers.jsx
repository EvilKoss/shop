const ADD = 'addWorker';

let initialState = {
	WorkMan: [{photo:"https://uznayvse.ru/images/celebs/habensky_medium.jpg",
	name:'Костя'},
	{photo:"https://static.mk.ru/upload/entities/2018/06/07/articles/detailPicture/95/72/ce/d7/58bcc7d521cd08692d9364476a060077.jpg",
	name:'Паша'}]
}

const ReducerWorkers = (state = initialState, action) => {
	switch (action.type){
		case ADD:
			return {
				...state,
				WorkMan: [...state.WorkMan,{photo:action.photo,name:action.name}]
			};
			default:
				return state;
	}
}

export const AddNewWorker = (photoUser,nameUser) =>  ({ type: ADD, photo:photoUser,name:nameUser})

export default ReducerWorkers;
