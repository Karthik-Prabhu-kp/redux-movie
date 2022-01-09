import {  LOAD_DATA, LOAD_SORT_OPTIONS} from "./type";
import axios from 'axios';



export  const sortOrder = () => {
    return async function(dispatch){
    const res = await axios.get('./data.json')
    dispatch(loadSortOptions(res.data.components[0].items));
    }
};

export const loadSortOptions = (options) => {
    return{
        type: LOAD_SORT_OPTIONS,
        payload: options
    };
};

export const fetchMovies = () =>{
    return async function(dispatch){
    const res = await axios.get('./data.json')
    dispatch(loadMoviesList(res.data.components[1].items));
    }
};
    
export const loadMoviesList = (list) => {
    return{
        type: LOAD_DATA,
        payload: list
    }
};

