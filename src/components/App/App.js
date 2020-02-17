import React, { Component } from 'react';

import {
    Container,
    Grid,
} from '@material-ui/core';

import './application.css';

import NewEmployee from '../NewEmployee/NewEmployee';
import EmployeesList from '../EmployeesList/EmployeesList';
import AppBanner from '../AppBanner/AppBanner';

class App extends Component {
    render() {
        return (
            <div>
                <AppBanner hdg="Functional Components" />
                
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
