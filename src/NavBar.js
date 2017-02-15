import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import {Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap/lib/Navbar';
//import './../public/Logo.jpg';


// const navbarInstance=(
//   <Navbar inverse collapseOnSelect>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">React-Bootstrap</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav>
//         <NavItem eventKey={1} href="#">Link</NavItem>
//         <NavItem eventKey={2} href="#">Link</NavItem>
//         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//           <MenuItem eventKey={3.1}>Action</MenuItem>
//           <MenuItem eventKey={3.2}>Another action</MenuItem>
//           <MenuItem eventKey={3.3}>Something else here</MenuItem>
//           <MenuItem divider />
//           <MenuItem eventKey={3.3}>Separated link</MenuItem>
//         </NavDropdown>
//       </Nav>
//       <Nav pullRight>
//         <NavItem eventKey={1} href="#">Link Right</NavItem>
//         <NavItem eventKey={2} href="#">Link Right</NavItem>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );

/*
class NavBar extends Component{
  render(){
  //  return(navbarInstance);
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Explore It!</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Exhibit 1<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Activity 1</a></li>
                  <li><a href="#">Activity 2</a></li>
                  <li><a href="#">Activity 3</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Exhibit 2<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Activity 1</a></li>
                  <li><a href="#">Activity 2</a></li>
                  <li><a href="#">Activity 3</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Exhibit 3<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Activity 1</a></li>
                  <li><a href="#">Activity 2</a></li>
                  <li><a href="#">Activity 3</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
*/
var leftLinks =
  [
    {
      linkTo: "#",
      text: "Home"
    },
    {
      linkTo: "#",
      text: "My Profile"
    }
  ];

var rightLinks =
  [
    {
      dropdown: true,
      text: "Exhibit 1",
      links: [
        {
          linkTo: "#",
          text: "Activity 1"
        },
        {
          linkTo: "#",
          text: "Activity 2"
        }
      ]
    },
    {
      dropdown: true,
      text: "Exhibit 2",
      links: [
        {
          linkTo: "#",
          text: "Activity 1"
        },
        {
          linkTo: "#",
          text: "Activity 2"
        }
      ]
    },
    {
      dropdown: true,
      text: "Exhibit 3",
      links: [
        {
          linkTo: "#",
          text: "Activity 1"
        },
        {
          linkTo: "#",
          text: "Activity 2"
        }
      ]
    }
  ];

class NavBar extends Component {

    render() {
      return (
        <nav className="navbar navbar-inverse" >
          <div className="container-fluid" >
            <div className="navbar-header" >
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" >
                <span className="sr-only" > Toggle navigation < /span>
                <span className="icon-bar" > < /span>
                <span className="icon-bar" > < /span>
                <span className="icon-bar" > < /span>
              </button>
              <NavBrand linkTo="#" text="Explore It!" / >
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse" >
              //<NavMenu links={ rightLinks } />
              <ul className="nav navbar-nav navbar-right" >
                //<NavMenu links={ leftLinks } />
              </ul>
            </div>
          </div>
        </nav>
      );
    }
};

class NavBrand extends Component {
  render() {
    return (
      <div >
        <a className="navbar-brand" href={this.props.linkTo} > {this.props.text} < /a>
      </div>
    );
  }
};

class NavMenu extends Component {
  render() {
    var links=this.props.links.map(function(link) {
      if (link.dropdown) {
        return (
          <NavLinkDropdown links={link.links} text={link.text} key={link.text} active={link.active}/>
        );
      } else {
        return (
          <NavLink linkTo={link.linkTo} text={link.text} key={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav" > {links} </ul>
    );
  }
};

class NavLinkDropdown extends Component {
  render() {
    var active=false;
    var links=this.props.links.map(function(link) {
      if (link.active) {
        active=true;
      }
      return (
        <NavLink linkTo={link.linkTo}text={link.text} key={link.text} active={link.active}/>
      );
    });
    return (
      <li className={"dropdown " + (active ? "active" : "")} >
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" key={this.props.text} > {this.props.text} <span className="caret" > < /span></a>
        <ul className="dropdown-menu" key={this.props.text + "-menu"} > {links} </ul>
      </li>
    );
  }
};

class NavLink extends Component {
  render() {
    return (
      <li className={(this.props.active ? "active" : "")} >
        <a href={this.props.linkTo} key={this.props.text} > {this.props.text} < /a>
      </li >
    );
  }
};

// // set data
// var navbar={};
// navbar.brand =
//   {linkTo: "#", text: "React Bootstrap Navbar"};
// navbar.links=[
//   {linkTo: "#", text: "Link 1"},
//   {linkTo: "#", text: "Link 2"},
// {dropdown: true, text: "Dropdown", links: [
//   {linkTo: "#", text: "Dropdown Link 1"},
//   {linkTo: "#", text: "Dropdown Link 2", active: true}
// ]}
// ];

export default NavBar;
