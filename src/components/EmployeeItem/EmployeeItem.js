import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
    TableRow,
    TableCell,
    Button,
} from '@material-ui/core';
import Swal from 'sweetalert2';

import configs from '../../constants/configs';

class EmployeeItem extends Component {
    removeEmployee = (event) => {
        Swal.fire({
        title: 'Are you sure?',
        text: `${this.props.employeeInfo.fullName} will be permanently removed.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

                this.props.dispatch({
                    type: 'REMOVE_EMPLOYEE',
                    payload: {
                        ...this.props.employeeInfo
                    }
                });

                Swal.fire(
                'Deleted!',
                `${this.props.employeeInfo.fullName} has been removed.'`,
                'success'
                )
            }
        })
    }

    render() {
        const employeeCells = configs.EMPLOYEES_TABLE.map((itemConfig, index) => {
            return (
                <TableCell key={index}>
                    {this.props.employeeInfo[itemConfig.dataKey]}
                </TableCell>
            );
        });

        employeeCells.push(
            <TableCell key={(employeeCells.length)}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.removeEmployee}
                >
                    Delete
                </Button>
            </TableCell>
        );

        return (
            <TableRow>
                {employeeCells}
            </TableRow>
        );
    }
}

export default connect(mapStoreToProps)(EmployeeItem);
