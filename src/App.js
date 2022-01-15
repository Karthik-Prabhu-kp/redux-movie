import React from "react"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderSelect from "./components/OrderSelect";
import { Provider } from "react-redux";
import store from "./store";




function App() {
  return (
    <div>
    <Provider store={store}>
      <Navbar />
      <OrderSelect />
      <Footer />
    </Provider>
    </div>
  );
}

export default App;
