import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import filterReducer from '../reducers/filterReducer';
import { bindActionCreators } from "redux";
import {fetchMovies, orderActions, orderMovies} from '../actions/orderActions'
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ORDER_BY_VALUE } from "../actions/type";
import Select from "react-select";
import MovieDetails from "./MovieDetails";
import {Link} from 'react-router-dom';

let display;

export function OrderSelect(){

    useEffect(() => {
      fetchMovies()
      sortOrder()
    },[]);

    
    const movieList = useSelector(state => state.filterReducer.movies );
    const sortBy = useSelector(state => state.filterReducer.sortOptions );
    
    const dispatch = useDispatch()
    const {fetchMovies,sortOrder} = bindActionCreators(require('../actions/orderActions'), dispatch)

    const [display,setDisplay] = useState([]);
    const [sortType, setSortType] = useState('releaseDate');
      
    useEffect(() => {
      const getSortedData = (type) =>{
        if (type.valueToOrderBy === "rank") {
          const sorted = [...movieList].sort((a, b) => a.rank - b.rank);
          setDisplay(sorted)
        }
        if (type.valueToOrderBy === "releaseDate") {
          const sorted = [...movieList].sort((a, b) => a.releaseDate - b.releaseDate);
          setDisplay(sorted)
        }
      };
     getSortedData(sortType);}, [sortType])
    
  
      return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <form  >
            <Select options={sortBy} value={sortBy.valueToOrderBy} defaultValue={{ label: "Release Date", value: 0 }} onChange={(event)=>setSortType(event)} />
          </form>
          <hr/>
          <ul className="no-bullets d-flex flex-lg-wrap p-3 " >{display.map((item,i)=>{
            return(
             
              <li className="inline-flex p-2 " key={item.id}>
              <div class="col-md-3 col-sm-6">
              <div className="card box-shadow" style={{width: "18rem"}}>
              <img src={item.imageUrl} className="card-img-top" alt="image"/>
              <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Release date: {item.releaseDate}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Rank: {item.rank}</h6>
              <Link  className="btn btn-primary" to={'/movie/' + item.id}>View Details</Link>
              </div>
              </div>
              </div>
              </li>
              
            )
          })}
          </ul>
        </div>
      </div>
      );
    }
  

  export default OrderSelect;