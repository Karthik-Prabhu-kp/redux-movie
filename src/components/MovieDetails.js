import React from "react";


function  MovieDetails(props){

    const {selectedMovie} = props
    
    return(
        <React.Fragment>
        <div className="container">
        <div className="row">
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
                <strong>Rated: {selectedMovie.rank}</strong> 
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>Plot: {selectedMovie.synopsis} </h3>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => props.setSelectedMovie()}>Close details</button>
      </div>
      </React.Fragment>
    )
    
};

export default MovieDetails ;