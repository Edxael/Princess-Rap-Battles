import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


import Banner from './comps/img/banner.jpg';
import MainC from './comps/00-MainComp.jsx';
import Page1 from './comps/01-Page1.jsx';
import Page2 from './comps/02-Page.jsx';
import Page3 from './comps/03-Page.jsx';
import Page4 from './comps/04-Page.jsx';


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
              <NavLink style={btn1} href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={btn1} href="/1">Rap 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={btn1} href="/2">Rap 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={btn1} href="/3">Rap 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={btn1} href="/4">Rap 4</NavLink>
            </NavItem>
          </Nav>
        </div>


        <hr style={ brSty } />

        <Route exact path="/" component={MainC}/>
        <Route path="/1" component={Page1}/>
        <Route path="/2" component={Page2}/>
        <Route path="/3" component={Page3}/>
        <Route path="/4" component={Page4}/>

        <br/>
        <hr style={ brSty } />
      </div>
    </Router>
  )
}

ReactDOM.render(<BasicExample />, document.getElementById("root"));
