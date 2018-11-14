import React, { Component } from 'react';
import Navmenuitems from './Navmenuitems'
import SearchBar from './SearchBar'
    

class Websitenavmenu extends Component {
    render() {
      return (
    <div className="Websitemenu">
        <nav className="nav_menu_items_container">
            <div className="menu_left">
                <a href="#"><h1 className="menu-logo">Ride your Code</h1></a>
            </div>
            <div className="menu_right">
                <Navmenuitems/>
                <SearchBar/>
          </div>
        </nav>
    </div>
        
      );
    }
  }
  

export default Websitenavmenu;
