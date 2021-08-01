import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogTitles } from './api/api'


function AllPosts() {
    const [blogTitles, setBlogTitles] = useState([])

    useEffect(() => {
      getBlogTitles()
        .then(titles => setBlogTitles(titles))
        .catch(e => console.error(e.message))
    }, [])
  
    return (
      <div>
        POSTS:
        <ul>
            {blogTitles.map(title => <Link to= {'/post/' + title}><li>{title}</li></Link>)}
        </ul>
      </div>
    );
}

export default AllPosts;