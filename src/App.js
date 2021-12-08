import React from "react"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Provider } from "react-redux";
import store from "./store";
import {Route,Routes} from 'react-router-dom';
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Landing/> 
      <Routes>   
      <Route path='/movie/:id' component={<MovieDetails/>}/>
      </Routes>
      <Footer />
    </Provider>
    
  );
}

export default App;
