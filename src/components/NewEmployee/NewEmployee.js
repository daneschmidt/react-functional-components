import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
    TextField,
    Button,
    Paper,
} from '@material-ui/core';

function NewEmployee(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    // const [newEmployee, setNewEmployee] = useState({firstName: '', lastName: '', position: '' });

    // const state = {
    //     firstName: '',
    //     lastName: '',
    //     position: '',
    // };
    
    const changeField = (fieldKey) => (event) => {
        // this.setState({
        //     [fieldKey]: event.target.value
        // });

        if (fieldKey === 'firstName') {
            setFirstName(event.target.value);
        } else if (fieldKey === 'lastName') {
            setLastName(event.target.value);
        } else if (fieldKey === 'position') {
            setPosition(event.target.value);
        }

        // setNewEmployee({
        //     [fieldKey]: event.target.value,
        // })
    }

    const saveNewEmployee = (event) => {
        // this.props.dispatch({
        //     type: 'ADD_EMPLOYEE',
        //     payload: {
        //         ...this.state
        //     }
        // });

        props.dispatch({
            type: 'ADD_EMPLOYEE',
            payload: {
                firstName,
                lastName,
                position
            }
        });

        // this.setState({
        //     firstName: '',
        //     lastName: '',
        //     position: '',
        // });

        setFirstName('');
        setLastName('');
        setPosition('');
    }

    return (
        <Paper className="paperPanel" elevation={3}>
            <h2>Add New Employee</h2>

            <div className="vr">
                <TextField
                    type="text"
                    label="First Name"
                    fullWidth
                    value={firstName}
                    onChange={changeField('firstName')}
                />
            </div>
            <div className="vr">
                <TextField
                    type="text"
                    label="Last Name"
                    fullWidth
                    value={lastName}
                    onChange={changeField('lastName')}
                />
            </div>
            <div className="vr">
                <TextField
                    type="text"
                    label="Position"
                    fullWidth
                    value={position}
                    onChange={changeField('position')}
                />
            </div>

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={saveNewEmployee}
            >
                Save
            </Button>
        </Paper>
    );
}

export default connect(mapStoreToProps)(NewEmployee);
