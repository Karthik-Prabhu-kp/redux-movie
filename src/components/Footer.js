import React from "react";

function Footer(){
    return(
        <div>
      <div className="row" data-testId='footerDisplay' >
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
                Karthik Prabhu
            </span>
            
          </div>
        </div>
      </div>
    </div>
    )
} 

export default Footer;