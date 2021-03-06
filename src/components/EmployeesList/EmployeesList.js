import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@material-ui/core';

import configs from '../../constants/configs';
import EmployeeItem from '../EmployeeItem/EmployeeItem';

class EmployeesList extends Component {
    render() {
        const employeesRows = this.props.store.employeesReducer.map((employeeInfo, index) => {
            return (
                <EmployeeItem key={index} employeeInfo={employeeInfo} />
            );
        });
        const tableHeadings = configs.EMPLOYEES_TABLE.map((item, index) => {
            let colSpanVal = 1;
            if (index === (configs.EMPLOYEES_TABLE.length - 1)) {
                colSpanVal = 2;
            }

            return (
                <TableCell key={index} colSpan={colSpanVal}>
                    {item.label}
                </TableCell>
            );
        });

        let employeesTable = (
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {tableHeadings}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeesRows}
                    </TableBody>
                </Table>
            </TableContainer>
        );

        if (this.props.store.employeesReducer.length === 0) {
            employeesTable = <p>There are currently no Employees here. You should probably higher someone.</p>;
        }

        return (
            <Paper className="paperPanel" elevation={3}>
                <h2>Employees</h2>
                
                {employeesTable}
            </Paper>
        );
    }
}

export default connect(mapStoreToProps)(EmployeesList);
