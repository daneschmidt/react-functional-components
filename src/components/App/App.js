import React, { Component } from 'react';
import logoSvg from './logo.svg';

import { Container } from '@material-ui/core';

import './application.css';

import NewEmployee from '../NewEmployee/NewEmployee';

class App extends Component {
    render() {
        return (
            <div>
                <header className="appBanner">
                    <img className="appLogo" src={logoSvg} alt="React Logo"/>
                    <h1>Functional Components</h1>
                </header>
                
                <Container>
                    <NewEmployee />
                </Container>

            </div>
        );
    }
}

export default App;
