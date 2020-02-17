import React, { Component } from 'react';
import logoSvg from './logo.svg';

import {
    Container,
    Grid,
} from '@material-ui/core';

import './application.css';

import NewEmployee from '../NewEmployee/NewEmployee';
import EmployeesList from '../EmployeesList/EmployeesList';

class App extends Component {
    render() {
        return (
            <div>
                <header className="appBanner">
                    <img className="appLogo" src={logoSvg} alt="React Logo"/>
                    <h1>Functional Components</h1>
                </header>
                
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <NewEmployee />
                        </Grid>
                        <Grid item xs={9}>
                            <EmployeesList />
                        </Grid>
                    </Grid>
                </Container>

            </div>
        );
    }
}

export default App;
