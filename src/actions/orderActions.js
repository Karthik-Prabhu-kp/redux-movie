import { ORDER_BY_VALUE, LOAD_DATA, LOAD_SORT_OPTIONS, LOAD_MOVIE } from "./type";
import axios from 'axios';



export  const sortOrder = () => dispatch => {
    {axios.get('./data.json')
    .then( response => {
        dispatch({
            type: LOAD_SORT_OPTIONS,
            payload: response.data.components[0].items       
        });
    })}
};

// export  const orderMovies = (sortBy) => dispatch => {
    
//     dispatch({
//         type: ORDER_BY_VALUE,
//         payload: sortBy 
//     });
// };

export const fetchMovies = () =>{
    return (dispatch)=>
    {axios.get('./data.json')
    .then( response => {
        dispatch({
            type: LOAD_DATA,
            payload: response.data.components[1].items 
        });
    })}
};
    
export const fetchMovie = (id) => {
    return (dispatch)=>
    {axios.get('./data.json')
    .then( response => {
        dispatch({
            type: LOAD_MOVIE,
            payload: response.data.components[1].items.id
        });
    })}

}

