import {  LOAD_DATA, LOAD_SORT_OPTIONS} from "./type";
import axios from 'axios';



export  const sortOrder = () => {
    return (dispatch)=>
    axios.get('./data.json')
    .then( response => {
        dispatch({
            type: LOAD_SORT_OPTIONS,
            payload: response.data.components[0].items       
        });
    })
};


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
    


