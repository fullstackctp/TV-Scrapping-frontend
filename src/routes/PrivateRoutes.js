import React, { Suspense, lazy, useEffect } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import slugs from 'resources/slugs';
import Login from './publicRoute/Login';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate(slugs.dashboard)
    },[])
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Routes >
                <Route path={SLUGS.dashboard} element={<DashboardComponent />} />
                <Route path={SLUGS.overviewTwo} element={() => <div>overviewTwo</div>} />
                <Route path={SLUGS.overviewThree} element={() => <div>overviewThree</div>} />
                <Route path={SLUGS.overview} element={() => <div>overview</div>} />
                <Route path={SLUGS.tickets} element={() => <div>tickets</div>} />
                <Route path={SLUGS.ideasTwo} element={() => <div>ideasTwo</div>} />
                <Route path={SLUGS.ideasThree} element={() => <div>ideasThree</div>} />
                <Route path={SLUGS.ideas} element={() => <div>ideas</div>} />
                <Route path={SLUGS.contacts} element={() => <div>contacts</div>} />
                <Route path={SLUGS.agents} element={() => <div>agents</div>} />
                <Route path={SLUGS.articles} element={() => <div>articles</div>} />
                <Route path={SLUGS.settings} element={() => <div>settings</div>} />
                <Route path={SLUGS.subscription} element={() => <div>subscription</div>} />
            </Routes>
        </Suspense>
    );
}

export default PrivateRoutes;
