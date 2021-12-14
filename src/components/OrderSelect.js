import React, {  useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import MovieDetails from "./MovieDetails";



export function OrderSelect(){

    useEffect(() => {
      fetchMovies()
      sortOrder()
      // eslint-disable-next-line
    },[]);

    
    const movieList = useSelector(state => state.filterReducer.movies );
    const sortBy = useSelector(state => state.filterReducer.sortOptions );
    
    const dispatch = useDispatch()
    const {fetchMovies,sortOrder} = bindActionCreators(require('../actions/orderActions'), dispatch)

    const [display,setDisplay] = useState([]);
    const [sortType, setSortType] = useState('releaseDate');
    const [selectedMovie, setSelectedMovie] = useState();
      
    useEffect(() => {
      const getSortedData = (type) =>{
        setDisplay(movieList);
        if (type === "Rank") {
          const sorted = [...movieList].sort((a, b) => a.rank - b.rank);
          setDisplay(sorted)
        }
        if (type === "Release Date") {
          const sorted = [...movieList].sort((a, b) => a.releaseDate - b.releaseDate);
          setDisplay(sorted)
        }
      };
      console.log(sortType)
      getSortedData(sortType);
    }, [sortType, movieList]);


      return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          {selectedMovie && <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
          <form  data-testid='formSort'>
             <select value={sortType} onChange={(event) => setSortType(event.target.value)} >{
                sortBy.map((sort,i) => {
                  return(
                    <option key={sortBy.valueToOrderBy} value={sortBy.valueToOrderBy}>{sort.label}</option>
                  )
                })
               }
             </select>
          </form>
          <hr/>
          <ul 
            data-testId='movieList'
            className="no-bullets d-flex flex-lg-wrap p-3 " >{
              
              display.map((movie,i)=>{
              const {imageUrl,title} = movie;
              return(
             
              <li className="inline-flex p-2 " key={movie.id}>
              <div class="col-md-3 col-sm-6">
              <div className="card box-shadow " style={{width: "18rem"}}>
              <img src={`${imageUrl}`} className="card-img-top" alt={`poster ${i}`} key={i} />     
              <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Release date: {movie.releaseDate}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Rank: {movie.rank}</h6>
              <button data-testid='button'  className="btn btn-primary" onClick={() => {setSelectedMovie(movie);window.scrollTo({ top: 0, behavior: "smooth" });}}>View Details</button>
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