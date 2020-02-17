import React, { Component } from 'react';
import {
    TextField,
    Button,
    Paper,
} from '@material-ui/core';

class NewEmployee extends Component {
    state = {
        firstName: '',
        lastName: '',
        position: '',
    };
    
    changeField = (fieldKey) => (event) => {
        this.setState({
            [fieldKey]: event.target.value
        });
    }

    render() {
        return (
            <Paper className="paperPanel" elevation={3}>
                <h2>Add New Employee</h2>

                <div className="vr">
                    <TextField
                        type="text"
                        label="First Name"
                        onChange={this.changeField('firstName')}
                    />
                    <TextField
                        type="text"
                        label="Last Name"
                        onChange={this.changeField('lastName')}
                    />
                    <TextField
                        type="text"
                        label="Position"
                        onChange={this.changeField('position')}
                    />
                </div>

                <Button variant="contained" color="primary">Save</Button>
            </Paper>
        );
    }
}

export default NewEmployee;
