import React from "react";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {fetchMovie} from '../actions/orderActions'

function  MovieDetails(){

    const movie = useSelector(state => state.filterReducer.movie );

    const dispatch = useDispatch()
    const {fetchMovie} = bindActionCreators(require('../actions/orderActions'), dispatch);

    useEffect((movie) => {
        fetchMovie(movie.match.parms.id)
    },[movie]);


    return(
        <React.Fragment>
        <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src="" className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">title</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Release Date:</strong> 
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> 
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>Synopsis </h3>
              
              <hr />
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
    
};

export default MovieDetails ;