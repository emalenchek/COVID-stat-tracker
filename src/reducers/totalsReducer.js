import { GET_TOTALS, TOTALS_LOADING } from '../actions/types';

const initialState = {
    totals: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TOTALS:
            return {
                ...state,
                totals: action.payload,
                loading: false
            };
        case TOTALS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}