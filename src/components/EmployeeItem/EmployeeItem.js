import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
    TableRow,
    TableCell,
    Button,
} from '@material-ui/core';

import configs from '../../constants/configs';

class EmployeeItem extends Component {
    removeEmployee = (event) => {
        this.props.dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: {
                ...this.props.employeeInfo
            }
        });
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
