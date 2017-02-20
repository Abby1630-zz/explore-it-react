import React, { Component } from 'react';
import './css/NavBar.css';

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
    // {
    //   dropdown: true,
    //   text: "Exhibit 1",
    //   links: [
    //     {
    //       linkTo: "#",
    //       text: "Activity 1"
    //     },
    //     {
    //       linkTo: "#",
    //       text: "Activity 2"
    //     }
    //   ]
    // },
    // {
    //   dropdown: true,
    //   text: "Exhibit 2",
    //   links: [
    //     {
    //       linkTo: "#",
    //       text: "Activity 1"
    //     },
    //     {
    //       linkTo: "#",
    //       text: "Activity 2"
    //     }
    //   ]
    // },
    // {
    //   dropdown: true,
    //   text: "Exhibit 3",
    //   links: [
    //     {
    //       linkTo: "#",
    //       text: "Activity 1"
    //     },
    //     {
    //       linkTo: "#",
    //       text: "Activity 2"
    //     }
    //   ]
    // }
  ];

class NavBar extends Component {

    render() {
      return (
        <nav className="navbar explore-navbar" >
          <div className="container-fluid" >
            <div className="navbar-header" >
              <NavBrand linkTo="#" text="ExploreIT" / >
            </div>
            <div >
              <ul className="nav navbar-nav navbar-right explore-navbar-right" >
                <NavMenu links={ leftLinks } />
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
        <a href={this.props.linkTo} key={this.props.text} className="navbar-brand explore-navbar-text"> {this.props.text} < /a>
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
