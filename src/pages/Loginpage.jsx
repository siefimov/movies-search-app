import { useLocation, useNavigate } from 'react-router-dom';

import React from 'react';

function Loginpage() {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';

    return (
        <div className='text-[#b4c6ef]'>
            <h2>Login page</h2>
            {fromPage}
        </div>
    );
}

export default Loginpage;
