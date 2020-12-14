import React, { useMemo } from 'react'
import baseUrl from '../../helpers/baseUrl';
import Blog from '../../models/Blog'
import ErrorPage from 'next/error'
import Image from "next/image"
// import fetch from 'isomorphic-unfetch'


export async function getStaticPaths() {

  // const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    console.log("baseUrl ", baseUrl);
    const resBlog = await fetch(`${baseUrl}/api/blogs`,{
      headers:{'Content-Type':'application/json'}
    })

    const dataBlog = await resBlog.json()

    const paths = dataBlog.map((data)=>({
        params: {bid:data._id},   
    })); 
    
    console.log("paths ", paths);
    return { paths, fallback: false };


    // return {
    //   paths: [
    //     { params: { pid: '5f8daaa072a73a07f96389fc' } },
    //     { params: { pid: '5f8dad0c72a73a07f96389fd' } },
    //     { params: { pid: '5f8dadc172a73a07f96389fe' } }
    //   ],
    //   fallback: false
    // };
}
  

export async function getStaticProps(context) {

  try
    {
    const { bid } = context.params;
    const response = await Blog.findOne({_id:bid})
    const res = JSON.parse(JSON.stringify(response))
    console.log("JSON.parse ", res);

    
    // console.log("bid ", bid);
    // const resBlog = await fetch(`${baseUrl}/api/blogs`,{
    //   headers:{'Content-Type':'application/json'}
    // })
    // const dataBlog = await resBlog.json()
    // console.log("resBlog ",dataBlog);
    // const projectNameUnique = dataBlog.filter(item=>item._id==bid);
    // console.log("deneme projectName", projectNameUnique[0].projectName);

    // const allProjectNameAsID = dataBlog.filter(item=>item.projectName==projectNameUnique[0].projectName)
    // console.log("allProjectNameAsID ", allProjectNameAsID);

    // const res = projectNameUnique

    return {
      props: { res },
    };
  }
  catch{
    return{
      props:{res:[]}
    }
  }
}


  // const styling = {
  //   backgroundImage: "url('images/hero_1.jpg')",
  //   height:"20%"
  //   }



export default function BlogDetail({res}) {

  if(!res){
    return <ErrorPage statusCode={404}/>;
  }


    // console.log("blog içindeyiz postId ", res);
    // console.log("res.imagePost ",res[0].imagePost);

    // console.log("blog içindeyiz subject ", subjectPost);

    // console.log("blog içindeyiz kardaşşşş ", blogs);
    // console.log("blog içindeyiz kardaşşşş ", blogs._id);
    
    //UNUTMA!! - blog sayfasındaki description ifadeleri lenght kontrolunden sonra 
    //slice yapılacak. Ve bütün metin çıkartılmayacak.. 
    
    return (
        <div>
    <div className="ftco-blocks-cover-1">
      {/* <div className="ftco-cover-1 overlay" style={{styling}}> */}
      <div className="ftco-cover-1 overlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <span className="d-block mb-3 text-white" data-aos="fade-up">Sep 19, 2019 <span className="mx-2 text-primary">&bullet;</span> by James Miller</span>
                <h1 className="mb-4" data-aos="fade-up" data-aos-delay="100">Single Blog Posts Title</h1>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 blog-content">
            <p className="lead">{res.title}</p>
            <p>{res.content}</p>

            {/* <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></blockquote> */}

          </div>

          <div className="col-md-4 sidebar">
            {/* <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search"></span>
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter"/>
                </div>
              </form>
            </div> */}
            
            <div className="sidebar-box">
              {/* <img src={res.imagePost} alt="Free Website Template by Free-Template.co" className="img-fluid mb-4 w-50 rounded-circle"/> */}
              <Image src={res.imagePost} className="img-fluid mb-4 w-50 rounded-circle" width={120} height={80}/>
              <h3 className="text-black">{res.dateTime}</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              {/* <p><a href="#" className="btn btn-primary btn-md text-white">Read More</a></p> */}
            </div>

          </div>
        </div>
      </div>
    </div>
    
        </div>
    )
}
