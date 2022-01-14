import React, { useEffect, useState } from 'react'
import './AllUsers.css'
import { DataGrid } from '@material-ui/data-grid';
import {Link} from 'react-router-dom';
import {getUsers, deleteUser} from '../service/api.js'

function AllUsers() {
    const [users, setUsers] = useState([]);

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers()
    }

    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
      },
      {
        field: 'userName',
        headerName: 'User Name',
        width: 150,
        editable: true,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: true,
      },
      {
        field: 'phone',
        headerName: 'Phone',
        width: 160,
        editable: true,
      },
      {
        field: 'website',
        headerName: 'Website',
        width: 160,
        editable: true,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 160,
        renderCell:(params) => {
                return <>
                <Link to={"/edituser/"+params.row.id}>
                    <button className="allusers_edit_btn allusers_btn">Edit</button>
                </Link>
                   <button className="allusers_remove_btn allusers_btn" onClick={() => deleteUserData(params.row.id)}>Remove</button>
                </>
            }
       },
    ];

    const getAllUsers = async() => {
        const response = await getUsers();
        setUsers(response.data)
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <div className="allusers" style={{ height: 400, width: '80%' }}>
            <DataGrid
        rows={users}
        columns={columns}
        pageSize={6}
        checkboxSelection
        disableSelectionOnClick
        pagination
      />
        </div>
    )
}

export default AllUsers;
