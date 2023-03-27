import { useLocation, Navigate } from 'react-router-dom';

import React from 'react';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = false;
    console.log(location);
    // check if we have authorization
    if (!auth) {
        return <Navigate to='/login' state={{ from: location }} />; //redirect to login page
    }

    return children; // this is page that is private
};

export default RequireAuth;
