import React from 'react';
import '../styles/users.css';
import usersImage from '../assets/users.webp';

const Users = () => {
    return (
        <div className="users_container">
            <h2 className="users_title">Fueling your project with 15M+ Lines of Code</h2>
            <p className="users_subtitle">
                Join the growing community leveraging a versatile codebase of 15 million lines, compatible with Python, Java, Node.js, and more.
            </p>
            <img src={usersImage} alt="Users and lines of code" className="users_image" />
        </div>
    );
};

export default Users;