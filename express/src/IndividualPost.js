import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from './api/api'

function IndividualPost() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])

  useEffect(() => {
    getPost(slug)
      .then(blog => { 
          setContent(blog.content)
          setTags(blog.tags)
      })
      .catch(e => console.error(e.message))
  }, [])

  return (
    <div>
          {content}
          <h3>Tags:</h3>
          {tags.map(tag => <span>{tag+ ', '}</span>)}
    </div>
  );
}

export default IndividualPost;