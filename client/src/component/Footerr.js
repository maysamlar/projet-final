
import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
function Footerr() {
  return (
    <div >
        
      
        {/*footer starts from here*/}
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">
                 
 Contact</h5>
                {/*headin5_amrc*/}
                <p className="mb10">184 rue ali Gabes</p>
   
                <p><i className="fa fa-phone" />  +216 75 270 650</p> 
                <p><i className="fa fa fa-envelope" /> Mcarrental@gmail.com</p>
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Liens</h5>
                {/*headin5_amrc*/}
                <ul className="footer_ul_amrc">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                 
                 
                </ul>
                {/*footer_ul_amrc ends here*/}
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Liens</h5>
                {/*headin5_amrc*/}
                <ul className="footer_ul_amrc">
                  <li> <Link to="/galerie">Gallery</Link></li>
                  <li><Link to="/contacte">Contact</Link></li>
                  <li><Link to="/avis">Avis</Link></li>
                
                
                </ul>
                {/*footer_ul_amrc ends here*/}
              </div>
              <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">subscribe</h5>
                {/*headin5_amrc ends here*/}
                <ul className="footer_ul2_amrc">
                  <li id='nour'><p><span>M</span>CarRental(Page Officielle)<a  href="#">https://www.lipsum.com/</a></p></li>
                  <li id='nour'><p><span>M</span>CarRental(Page officielle)<a href="#">https://www.lipsum.com/</a></p></li>
                
                </ul>
                {/*footer_ul2_amrc ends here*/}
              </div>
            </div>
          </div>
          <div className="gitpush">

       <ul>
        <li>
          <a className="facebook" href="#">
            <span />
            <span />
            <span />
            <span />
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a className="twitter" href="#">
            <span />
            <span />
            <span />
            <span />
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a className="instagram" href="#">
            <span />
            <span />
            <span />
            <span />
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a className="google" href="#">
            <span />
            <span />
            <span />
            <span />
            <i className="fa fa-google-plus" aria-hidden="true" />
          </a>
        </li>
      </ul>

           </div>
        
         
        </footer>
      </div>
  
  )
}

export default Footerr