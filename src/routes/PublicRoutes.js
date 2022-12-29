import React, { useEffect } from 'react';
import { Navigate, Route, Routes ,useNavigate} from 'react-router-dom';
import SLUGS from 'resources/slugs';
import Login from './publicRoute/Login';
import Signup from './publicRoute/Signup';


function PublicRoutes() {

    const navigate = useNavigate()
    useEffect(() => {
        navigate('/login')
    },[])

    return (
        <Routes>
            <Route path={SLUGS.login} element={<Login />} />
            <Route path={SLUGS.signup} element={<Signup />} />
            <Route path={SLUGS.forgotPassword} element={() => <div>forgotPassword</div>} />
        </Routes>
    );
}

export default PublicRoutes;
