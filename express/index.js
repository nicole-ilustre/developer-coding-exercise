const express = require('express')
const { getTopWords } = require('./utils/tags')
const app = express()
const rootPostDir = '../assets/posts'
const fs = require('fs')
const path = require('path')


 app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/post/:slug', function (req, res) {
  const { slug } = req.params
   fs.readFile(path.join(rootPostDir, slug), 'utf8', function (err, data) {
     if(err) {
       throw err
     }
     const post = {
       content: data,
       tags: getTopWords(data)
     }
     res.json(post)
   })
})

app.get('/posts', function (req, res) {
  const blogTitles = fs.readdirSync(rootPostDir)
  res.json(blogTitles)
})

app.listen(5000, function () {
  console.log('Dev app listening on port 3000!')
})
