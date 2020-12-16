
import React from 'react'
import BlogPageImage from '../components/Blog/BlogPageImage/BlogPageImage'
import BlogPosts from '../components/Blog/BlogPosts/BlogPosts'
import baseUrl from '../helpers/baseUrl'
// import Blog from '../models/Blog'


export default function BlogPage({blogs}) {
    return (
        <div>
            <BlogPageImage/>
            <BlogPosts {...{blogs}}/>
        </div>
    )
}


export async function getStaticProps() {

    console.log("Blog sayfası getStaticProps içi ");
    // const resBlog = await fetch(`${baseUrl}/api/blogs`,{
    //     headers:{'Content-Type':'application/json'}
    // });
    const url = `${process.env.BASE_URL}/api/blogs`
    console.log("BASE_URL ", url);
    const resBlog = await fetch('https://mini-repo-demo.zgersan.vercel.app/api/blogs',{
        headers:{'Content-Type':'application/json'}
      })
    const dataBlog = await resBlog.json()

    console.log("dataBlog ", dataBlog);

    // const response = await Blog.find({isActive:true})
    // const dataBlog = JSON.parse(JSON.stringify(response))

    return {
        // props:{slayts:dataSlayt}
        props:{blogs:dataBlog}
      }
}