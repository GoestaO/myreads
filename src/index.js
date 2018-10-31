import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Search from './components/Search/Search';

ReactDOM.render(<Router>
  {/* <Route path="/" exact="exact" component={Index}/> */}
  <div>
    <App/>
    <Route exact path="/search/" component={Search}/>
  </div>
  {/* <Route path="/users/" component={Users}/> */}
</Router>, document.getElementById('root'))
