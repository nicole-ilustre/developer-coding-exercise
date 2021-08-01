import { HashRouter as Router, Route } from 'react-router-dom'
import AllPosts from './AllPosts'
import IndividualPost from './IndividualPost'

function App() {
  return (
    <Router>
      <Route exact path='/' component={AllPosts} />
      <Route path='/post/:slug' component={IndividualPost} />
    </Router>
  )
 
}

export default App;
