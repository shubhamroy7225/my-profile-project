import React, { Component } from 'react';
import pdf from "../components/Shubham-Jayswal-Resume.pdf"
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        
        <h1><a className = "pdf" href = {pdf}>Download Pdf</a></h1>
         <div className="row education">
            
         <div className="row_education">
           <div>
           <img className="resume"   src="images/resume1.jpeg" alt="" />
           </div>
           <div>
           <img className="resume"  src="images/resume2.jpeg" alt="" />
           </div>
        </div>

   			</div>

         

      </section>
    );
  }
}