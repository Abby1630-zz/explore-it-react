import React, { Component } from 'react';
import './css/NavBar.css';

var leftLinks =
[
  {
    text: "Home",
    navigateTo: "SelectActivity"
  },
  {
    text: "My Profile",
    navigateTo: "MyProfile"
  }
];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibit: "not set",
      activity: "not set"
    }
    this.nextPage= this.nextPage.bind(this);
  }

  nextPage (navigateTo) {
    this.props.changePage(navigateTo);
  }

  render() {
    return (
      <nav className="navbar explore-navbar" >
        <div className="container-fluid" >
          <div className="navbar-header" >
            <NavBrand text="ExploreIT" / >
          </div>
          <div >
            <ul className="nav navbar-nav navbar-right explore-navbar-right" >
              <NavMenu links={ leftLinks } changePage={this.nextPage} currentPage={this.props.currentPage}/>
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
        <a className="navbar-brand explore-navbar-text" href={this.props.linkTo} > {this.props.text} < /a>
      </div>
    );
  }
};

class NavMenu extends Component {
  render() {
    if (this.props.currentPage !== "Intro" && this.props.currentPage !== "Welcome"){
      var me = this;
      var links=this.props.links.map(function(link) {
        return (
          <NavLink text={link.text} key={link.text} changePage={me.props.changePage} linkTo={link.navigateTo}/>
        );
      });
      return (
        <ul className="nav navbar-nav" > {links} </ul>
      );
    } else {
      return null;
    }
  }
};

// class NavLinkDropdown extends Component {
//   render() {
//     var active=false;
//     var links=this.props.links.map(function(link) {
//       if (link.active) {
//         active=true;
//       }
//       return (
//         <NavLink linkTo={link.linkTo}text={link.text} key={link.text} active={link.active}/>
//       );
//     });
//     return (
//       <li className={"dropdown " + (active ? "active" : "")} >
//         <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" key={this.props.text} > {this.props.text} <span className="caret" > < /span></a>
//         <ul className="dropdown-menu" key={this.props.text + "-menu"} > {links} </ul>
//       </li>
//     );
//   }
// };

class NavLink extends Component {
  render() {
    return (
      <li className={(this.props.active ? "active" : "")} >
        <a key={this.props.text} className="navbar-brand explore-navbar-text" onClick={() => this.props.changePage(this.props.linkTo)}> {this.props.text} < /a>
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
