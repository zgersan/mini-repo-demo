import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// export default function BlogPosts(props) {
  export default function BlogPosts({blogs}) {

    console.log("BlogPosts ", blogs);
   
  //  const blogList = props.blogs.map((blog, index)=>{
    const blogList = blogs.map((blog, index)=>{
     return(
      <div key={index} className="col-lg-3 col-md-6 mb-5">
        <div className="post-entry-1 h-100">
          {/* <a href="single.html"> */}
            <Image src={blog.imagePost} className="img-fluid" width={210} height={140}/>
            {/* <img src={blog.imagePost} alt="Image"
            className="img-fluid"/> */}
          {/* </a> */}
          <div className="post-entry-1-contents">
            <span className="meta">{blog.dateTime}</span>
            
            {/* <a href="single.html"><h2>{blog.title}</h2></a> */}
            <p><h2>{blog.title}</h2></p>
            <p className="my-3">
              {/* <a href="#" className="more-39291">Continue Reading</a> */}

              <Link href="/blog/[bid]" as={`/blog/${blog._id}`}>
                <a>
                  <div className="more-39291">
                  Continue Reading
                  </div>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
     )
   })


    return (
      <>
        <div className="site-section">
        <div className="container">
          <div className="row align-items-stretch">
            {blogList}
{/* 
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_1.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_2.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_3.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_4.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_1.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_2.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_3.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="post-entry-1 h-100">
                <a href="single.html">
                  <img src="images/post_4.jpg" alt="Image"
                   className="img-fluid"/>
                </a>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <a href="single.html"><h2>IUSTO QUOS VENIAM MAGNI TOTAM</h2></a>
                  <p className="my-3"><a href="#" className="more-39291">Continue Reading</a></p>
                </div>
              </div>
            </div>
   */}
            {/* Burada pagination yapmak gerekiyor */}
{/*             
            <div className="col-12">
              <span className="p-3">1</span>
              <a href="#" className="p-3">2</a>
              <a href="#" className="p-3">3</a>
              <a href="#" className="p-3">4</a>
            </div> */}

          </div>
        </div>
      </div>
      </>
    )
}
