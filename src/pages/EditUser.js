import React, { useEffect, useState } from 'react'
import './EditUser.css';
import {useHistory, useParams} from 'react-router-dom';
import { getUser } from '../service/api.js';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { editUser } from '../service/api.js';


const initialValues = {
    name:"",
    email: "",
    password: "",
    phoneNumber: "",
    hobbies: "",
    DOB:"",
}

function EditUser() {
    const [user, setUser] = useState(initialValues);
    const {userId} = useParams();
    const history = useHistory();

    const loadUserdata = async(id) => {
        const response = await getUser(id);
        setUser(response.data)
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async(id, user) => {
        await editUser(id, user);
        history.push('/allusers')
    }

    useEffect(() => {
        loadUserdata(userId);
    }, [])

    const {name, userName, email, phone, website, DOB, age, id} = user;

    return (
        <div className="editUser">
            <div className="user_container">
                <div className="user_show">
                        <h2>{name}</h2>
                        <span className="user_show_title">
                            Account Details
                        </span>
                        <div className="user_show_info">
                            <PermIdentityIcon className="user_show_icon"></PermIdentityIcon>
                            <span className="user_show_username">
                               {userName}
                            </span>
                        </div>

                        <div className="user_show_info">
                            <PermContactCalendarIcon className="user_show_icon"></PermContactCalendarIcon>
                            <span className="user_show_username">
                               {age}
                            </span>
                        </div>

                        <div className="user_show_info">
                            <CalendarTodayIcon className="user_show_icon"> </CalendarTodayIcon>
                            <span className="user_show_username">
                               {DOB}
                            </span>
                        </div>

                        <div className="user_show_info">
                            <PhoneAndroidIcon className="user_show_icon"></PhoneAndroidIcon>
                            <span className="user_show_username">
                               {phone}
                            </span>
                        </div>

                        <div className="user_show_info">
                            <MailOutlineIcon className="user_show_icon"></MailOutlineIcon>
                            <span className="user_show_username">
                               {email}
                            </span>
                        </div>

                        <div className="user_show_info">
                            <LocationSearchingIcon className="user_show_icon"></LocationSearchingIcon>
                            <span className="user_show_username">
                               {website}
                            </span>
                        </div>
                </div>
                <div className="user_update">
                    <span className="userUpdateTitle">Edit Profile</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateItem">
                          <label>Name</label>
                          <input
                            type="text"
                            className="userUpdateInput"
                            value={name}
                            name="name"
                            onChange={onValueChange}
                          />
                        </div>

                        <div className="userUpdateItem">
                          <label>User Name</label>
                          <input
                            type="text"
                            className="userUpdateInput"
                            value={userName}
                            name="userName"
                            onChange={onValueChange}
                          />
                        </div>
                
                        <div className="userUpdateItem">
                          <label>Email</label>
                          <input
                            type="text"
                            className="userUpdateInput"
                            value={email}
                            name="email"
                            onChange={onValueChange}
                          />
                        </div>

                        <div className="userUpdateItem">
                          <label>Phone</label>
                          <input
                            type="text"
                            className="userUpdateInput"
                            value={phone}
                            name="phone"
                            onChange={onValueChange}
                          />
                        </div>

                        <div className="userUpdateItem">
                          <label>Website</label>
                          <input
                            type="text"
                            className="userUpdateInput"
                            value={website}
                            name="website"
                            onChange={onValueChange}
                          />
                        </div>

                    </form>
                    <button className="userUpdateButton" onClick={() => editUserDetails(id, user)}>Update Profile</button>
                </div>
            </div>
        </div>
    )
}

export default EditUser
