import React from 'react';
import {useTable} from 'react-table';
import road_report from '../data';
import './Admin_manage.css';

function Admin_manage() {
    const data = React.useMemo(() => road_report, []);

    const columns = React.useMemo(
        () => [
            {Header: 'id', accessor: 'col1'},
            {Header: 'image', accessor: 'col2'},
            {Header: 'damage_type', accessor: 'col3'},
            {Header: 'status', accessor: 'col4'},
            {Header: 'time', accessor: 'col5'},
            {Header: 'region', accessor: 'col6'},
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data});

    return (
        <div className="admin_manage">
            <table className="data_table" {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps({
                                    className: 'header',
                                })}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td
                                    {...cell.getCellProps({
                                        className: cell.column.Header === 'id' ? 'data_graph_id' : 'data_graph',
                                    })}
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Admin_manage;
