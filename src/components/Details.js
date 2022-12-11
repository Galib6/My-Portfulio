import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Details = () => {
    const { siteDetails } = useContext(AuthContext)

    console.log(siteDetails)
    return (
        <div>

        </div>
    );
};

export default Details;