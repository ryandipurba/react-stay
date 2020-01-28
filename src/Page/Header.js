import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';

class Header extends Component {
    render() {
        return (
            <div className="flexHeader">
                <Logo />
                <Search />
            </div >
        );
    }
}

export default Header; 