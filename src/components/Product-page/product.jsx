import React from 'react'
import "./the-product-style.css"
import Header from '../navbar/navbar';
export default function Product (){

  
  
  
    return (
     <>
     <Header/>

      <div className="section-fluid-main">
        <div className="section">
          <div className="info-wrap mob-margin">
            <p className="title-up">Modern chair</p>
            <h2>Sella Gastro</h2>
            <h4>$174 <span>$237</span></h4>	
            <div className="section-fluid">
              <input className="desc-btn" type="radio" id="desc-1" name="desc-btn" defaultChecked />
              <label htmlFor="desc-1">Description</label> 
              <input className="desc-btn" type="radio" id="desc-2" name="desc-btn" />
              <label htmlFor="desc-2">Details</label> 
              <div className="section-fluid desc-sec accor-1">
                <p>The chair construction is made of ash tree. Upholstery and wood color at customer's request.</p>
              </div>	
              <div className="section-fluid desc-sec accor-2">
                <div className="section-inline">
                  <p><span>76</span>cm<br />Lenght</p>
                </div>	
                <div className="section-inline">
                  <p><span>68</span>cm<br />Width</p>
                </div>
                <div className="section-inline">
                  <p><span>87</span>cm<br />Height</p>
                </div>
                <div className="section-inline">
                  <p><span>10</span>kg<br />Weight</p>
                </div>
              </div>	
            </div>	
            <h5>Choose upholstery:</h5>
          </div>
          <div className="clearfix" />
          <input className="color-btn for-color-1" type="radio" id="color-1" name="color-btn" defaultChecked />
          <label className="first-color" htmlFor="color-1" /> 
          <input className="color-btn for-color-2" type="radio" id="color-2" name="color-btn" />
          <label className="color-2" htmlFor="color-2" /> 
          <input className="color-btn for-color-3" type="radio" id="color-3" name="color-btn" />
          <label className="color-3" htmlFor="color-3" /> 
          <input className="color-btn for-color-4" type="radio" id="color-4" name="color-btn" />
          <label className="color-4" htmlFor="color-4" /> 
          <input className="color-btn for-color-5" type="radio" id="color-5" name="color-btn" />
          <label className="color-5" htmlFor="color-5" /> 
          <input className="color-btn for-color-6" type="radio" id="color-6" name="color-btn" />
          <label className="color-6" htmlFor="color-6" /> 
          <div className="clearfix" />
          <div className="info-wrap">
            <a href="#" className="btn"><i className="uil uil-shopping-cart icon" /> Order Now</a>
          </div>
          <div className="img-wrap chair-1" />
          <div className="img-wrap chair-2" />	
          <div className="img-wrap chair-3" />
          <div className="img-wrap chair-4" />
          <div className="img-wrap chair-5" />
          <div className="img-wrap chair-6" />		
          <div className="back-color" />	
          <div className="back-color chair-2" />	
          <div className="back-color chair-3" />	
          <div className="back-color chair-4" />	
          <div className="back-color chair-5" />	
          <div className="back-color chair-6" />	
      
        </div>
      </div>
   
     </>
    );
  }