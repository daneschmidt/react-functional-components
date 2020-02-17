import React, { Component } from 'react';
import logoSvg from './logo.svg';

import './application.css';

class Template extends Component {
    render() {
        return (
            <div>
                <header className="appBanner">
                    <img className="appLogo" src={logoSvg} alt="React Logo"/>
                    <h1>Functional Components</h1>
                </header>
                

            </div>
        );
    }
}

export default Template;
