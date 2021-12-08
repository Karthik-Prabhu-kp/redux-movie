import React, {  useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import {Link} from 'react-router-dom';
import { Route } from "react-router";
import MovieDetails from "./MovieDetails";



export function OrderSelect(){

    useEffect(() => {
      fetchMovies()
      sortOrder()
    });

    
    const movieList = useSelector(state => state.filterReducer.movies );
    const sortBy = useSelector(state => state.filterReducer.sortOptions );
    
    const dispatch = useDispatch()
    const {fetchMovies,sortOrder} = bindActionCreators(require('../actions/orderActions'), dispatch)

    const [display,setDisplay] = useState([]);
    const [sortType, setSortType] = useState('releaseDate');
    const [selectedMovie, setSelectedMovie] = useState();
      
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
      getSortedData(sortType);
    }, [sortType, movieList]);
    
  
      return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          {selectedMovie && <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
          <form  >
            <Select options={sortBy} value={sortBy.valueToOrderBy} defaultValue={{ label: "Release Date", value: 0 }} onChange={(event)=>setSortType(event)} />
          </form>
          <hr/>
          <ul className="no-bullets d-flex flex-lg-wrap p-3 " >{display.map((movie,i)=>{
              const {imageUrl,title,id} = movie;
            return(
             
              <li className="inline-flex p-2 " key={movie.id}>
              <div class="col-md-3 col-sm-6">
              <div className="card box-shadow" style={{width: "18rem"}}>
              <img src={imageUrl} className="card-img-top" alt="poster"/>
              <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Release date: {movie.releaseDate}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Rank: {movie.rank}</h6>
              <button  className="btn btn-primary" onClick={() => {setSelectedMovie(movie)}}>View Details</button>
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