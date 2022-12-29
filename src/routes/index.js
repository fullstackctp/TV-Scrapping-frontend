import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import slugs from 'resources/slugs';
import { authLoginAction } from 'store/actions/loginAction';

function Routes() {
    const { pathname } = useLocation();

    const auth = useSelector(state => state.authLoginReducer)

    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
    const [isUserLoggedIn , setIsUserLoggedIn] = useState(false)

    useEffect(() => {
        console.log(auth?.data?.email,'kk000000000')
        window.scrollTo(0, 0);
        if(auth?.data?.email) {
            setIsUserLoggedIn(true)
        } else {
            setIsUserLoggedIn(false)
        }
    }, [pathname,auth]);

    return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
