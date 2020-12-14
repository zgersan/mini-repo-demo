import React from 'react'
import FooterCopyRight from '../FooterCopyRight/FooterCopyRight'

export default function Footer() {
    return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-7">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>

              </div>
              <div className="col-md-4 ml-auto">
                <h2 className="footer-heading mb-4">Features</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>

            </div>
          </div>
          <div className="col-md-4 ml-auto">

        {/* <div className="mb-5"> */}
              <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
            <form className="footer-suscribe-form">
                <div className="input-group mb-3">
                  <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                  <div className="input-group-append">
                    <button className="btn btn-primary text-white" type="button" id="button-addon2">Subscribe</button>
                  </div>
                </div>
        {/* </div> */}


            <h2 className="footer-heading mb-4">Follow Us</h2>
            <a href="#about-section" className="smoothscroll pl-0 pr-3"><span className="icon-facebook"/></a>
            <a href="#" className="pl-3 pr-3"><span className="icon-twitter"/></a>
            <a href="#" className="pl-3 pr-3"><span className="icon-instagram"/></a>
            <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"/></a>
            </form>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
            
            </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
    <FooterCopyRight/>
    </>
    )
}
