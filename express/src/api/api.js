import request from 'superagent'

export function getPost (slug) {
    return request.get('http://localhost:5000/post/' + slug)
    .then(res => res.body)
}

export function getBlogTitles () {
    return request.get('http://localhost:5000/posts')
    .then(res => res.body)
}