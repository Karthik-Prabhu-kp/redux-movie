import React from "react"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Landing />
      <Footer />
    </Provider>
    </>
  );
}

export default App;
