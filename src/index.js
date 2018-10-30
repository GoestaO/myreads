import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Search from './components/Search/Search';

ReactDOM.render(<Router>
  <div>
    <Route exact path="/" component={App}/>
    <Route exact path="/search" component={Search}/>
  </div>
</Router>, document.getElementById('root'))
