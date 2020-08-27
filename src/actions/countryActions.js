import axios from 'axios';
import { GET_COUNTRIES, COUNTRIES_LOADING } from './types';

export const getCountries = () => dispatch => {
    dispatch(setCountriesLoading());
    axios.get(`https://api.covid19api.com/summary`)
        .then(res => {
            dispatch({
                type: GET_COUNTRIES,
                payload: res.data.Countries
            })
        })
};

export const setCountriesLoading = () => {
    return {
        type: COUNTRIES_LOADING
    };
};