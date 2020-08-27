import {
    GET_COUNTRIES,
    COUNTRIES_LOADING
} from '../actions/types';

const initialState = {
    countries: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case COUNTRIES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}