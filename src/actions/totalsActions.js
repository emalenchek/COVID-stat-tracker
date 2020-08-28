import axios from 'axios';
import { GET_TOTALS, TOTALS_LOADING } from './types';

export const getTotals = () => dispatch => { 
    axios.get(`https://api.covid19api.com/summary`)
        .then(res => {
            dispatch({
                type: GET_TOTALS,
                payload: res.data.Global
            })
        })
};

export const setTotalsLoading = () => {
    return {
        type: TOTALS_LOADING
    };
}