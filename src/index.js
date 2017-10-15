import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Banner from './comps/img/banner.jpg';
import MainC from './comps/00-MainComp.jsx';
import Page1 from './comps/01-Page1.jsx';
import Page2 from './comps/02-Page.jsx';
import Page3 from './comps/03-Page.jsx';
import Page4 from './comps/04-Page.jsx';
import Page5 from './comps/05-Page.jsx';


const BasicExample = () => {
  let brSty = { width: "80%" }
  let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100vh" }
  let btn1 = { backgroundColor: "black", marginRight: "3px" }
  let bar1 ={ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }
  return(
    <Router>
      <div style={MainDiv}>

        <img src={Banner} alt="Miss Pic."/>

        <div>
          <Nav style={bar1}>
            <NavItem>
              <Link style={btn1} to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link style={btn1} to="/1">Page 1</Link>
            </NavItem>
            <NavItem>
              <Link style={btn1} to="/2">Page 2</Link>
            </NavItem>
            <NavItem>
              <Link style={btn1} to="/3">Page 3</Link>
            </NavItem>
            <NavItem>
              <Link style={btn1} to="/4">Page 4</Link>
            </NavItem>
          </Nav>
        </div>

        <hr style={ brSty } />

        <Switch>
          <Route exact path="/" component={MainC}/>
          <Route path="/1" component={Page1}/>
          <Route path="/2" component={Page2}/>
          <Route path="/3" component={Page3}/>
          <Route path="/4" component={Page4}/>
          <Route component={Page5}/>
        </Switch>


        <br/>
        <div>The question is: "Who got the last word..."</div>
        <h4>By: <a href="https://www.mycode.website/">Edmundo Rubio.</a></h4>
        <hr style={ brSty } />

      </div>
    </Router>
  )
}

ReactDOM.render(<BasicExample />, document.getElementById("root"));
