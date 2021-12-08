import {  LOAD_DATA, LOAD_SORT_OPTIONS } from "../actions/type";

const initialState = {
    sortOptions: [],
    movies: [],
    sortedMovies: [],
    
};

export default function filterReducer(state = initialState, action){
    switch(action.type){
        case LOAD_SORT_OPTIONS:
            return{
                ...state,
                sortOptions: action.payload
            };

        case LOAD_DATA:
            return{
                ...state,
                movies: action.payload 
            };

        default:
            return state;   
    };
};

 
