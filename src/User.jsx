import React from 'react';
import { useParams } from 'react-router-dom';


const User =() => {
    const {fname,lname} = useParams();
    // both should have same name parametrs which we pass at App.jsx file
    return(
        <>
            <h1> Hey User {fname} {lname} </h1>
        </>
    );

};
export default User;