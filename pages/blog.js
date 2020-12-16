
import React from 'react'
import BlogPageImage from '../components/Blog/BlogPageImage/BlogPageImage'
import BlogPosts from '../components/Blog/BlogPosts/BlogPosts'
import baseUrl from '../helpers/baseUrl'
import Blog from '../models/Blog'
import dbConnect from '../services/database'

export default function BlogPage({blogs}) {
    return (
        <div>
            <BlogPageImage/>
            <BlogPosts {...{blogs}}/>
        </div>
    )
}


export async function getStaticProps() {
    dbConnect()

    console.log("Blog sayfası getStaticProps içi ");
    const resBlog = await fetch(`${baseUrl}/api/blogs`,{
        headers:{'Content-Type':'application/json'}
    });

    const dataBlog = await resBlog.json()

    console.log("dataBlog ", dataBlog);

    // const response = await Blog.find({isActive:true})
    // const dataBlog = JSON.parse(JSON.stringify(response))

    return {
        // props:{slayts:dataSlayt}
        props:{blogs:dataBlog}
      }
}