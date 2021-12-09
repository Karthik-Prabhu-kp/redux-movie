import React from "react";


function  MovieDetails(props){

    const {selectedMovie} = props
    
    return(
        <React.Fragment>
        <div className="container p-3">
        <div className="row p-3">
          <div className="col-md-4 card card-body">
            <img src={selectedMovie.imageUrl} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{selectedMovie.title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Release Date: {selectedMovie.releaseDate} </strong> 
              </li>
              <li className="list-group-item">
                <strong>Rank: {selectedMovie.rank}</strong> 
              </li>
              <li className="list-group-item">
                <strong>synopaia: {selectedMovie.synopsis}</strong> 
              </li>
            </ul>
            <button className="btn btn-primary " onClick={() => props.setSelectedMovie()}>Close details</button>
          </div>
          
        </div>
        
      </div>
      </React.Fragment>
    )
    
};

export default MovieDetails ;