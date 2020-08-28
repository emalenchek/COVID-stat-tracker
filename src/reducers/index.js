import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import totalsReducer from './totalsReducer';

export default combineReducers({
    country: tableReducer,
    totals: totalsReducer
});