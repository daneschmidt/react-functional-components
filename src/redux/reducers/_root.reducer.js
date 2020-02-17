import { combineReducers } from 'redux';
import employeesReducer from '../reducers/employees.reducer';

const rootReducer = combineReducers({
    employeesReducer,
});

export default rootReducer;
