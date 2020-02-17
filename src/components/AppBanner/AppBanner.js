import React, { Component } from 'react';
import logoSvg from './logo.svg';

class AppBanner extends Component {
    render() {
        return (
            <header className="appBanner">
                <img className="appLogo" src={logoSvg} alt="React Logo"/>
                <h1>{this.props.hdg}</h1>
            </header>
        );
    }
}

export default AppBanner;
