import {createStore,combineReducers} from 'redux';
import ReducerShop from './Shop/ReducerShop';
import ReducerWorkers from './Workers/ReducerWorkers';

let reducers = combineReducers({
    ShopsData: ReducerShop,
	WorkersData: ReducerWorkers
});

let store = createStore(reducers);

export default store;
