import React from 'react'

export default function FooterCopyRight() {
    return (
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
            <p>
            Copyright &copy;
            {/* <script>document.write(new Date().getFullYear());</script>  */}
            All rights reserved | This template is made with 
            <i className="icon-heart text-danger" aria-hidden="true"></i> by 
            </p>
            </div>
          </div>

        </div>
    )
}
