import React, { useState } from 'react'
import './AddUser.css';
import { addUser } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name:"",
    userName:"",
    email:"",
    phone:"",
    website:"",
    DOB:"",
    age:"",
}

function AddUser() {
    const [user, setUser] = useState(initialValue);
    const history = useHistory();

    const{name, userName, phone, website, DOB, age, email} = user;

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const addUserDetails = async(user) => {
        await addUser(user);
        history.push('/allusers')
    }

    return (
        <div className="addUser">
      <h1 className="addUserTitle">New User</h1>
      <form className="addUserForm">
        <div className="addUserItem">
          <label>Name</label>
          <input type="text" placeholder="Your Full Name" name="name" value={name} onChange={onValueChange}/>
        </div>
        <div className="addUserItem">
          <label>User Name</label>
          <input type="text" placeholder="Your User Name" name="userName" value={userName} onChange={onValueChange}/>
        </div>
        <div className="addUserItem">
          <label>Email</label>
          <input type="email" placeholder="Your Email" name="email" value={email} onChange={onValueChange}/>
        </div>
        <div className="addUserItem">
          <label>Phone Number</label>
          <input type="text" placeholder="Your Phone Number" name="phone" value={phone} onChange={onValueChange}/>
        </div>
        <div className="addUserItem">
          <label>Website</label>
          <input type="text" placeholder="Your Website" name="website" value={website} onChange={onValueChange}/>
        </div>
        <div className="addUserItem">
          <label>Date Of Birth</label>
          <input type="date" placeholder="Your DOB" name="DOB" value={DOB} onChange={onValueChange}/>
        </div>
        <div className="addUserItem">
          <label>Age</label>
          <input type="number" placeholder="Your Age" name="age" value={age} onChange={onValueChange}/>
        </div>
      </form>
      <button className="addUserButton" onClick={() => addUserDetails(user)}>Create User</button>
    </div>
    )
}

export default AddUser
