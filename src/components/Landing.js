import React,{ Component } from "react";
import  {OrderSelect}  from "./OrderSelect";

export class Landing extends Component {
  render() {
    
    return (
      <div className="container">
        
        <OrderSelect />
      </div>
    );
  }
}

export default Landing;