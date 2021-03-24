import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

const Home = lazy(()=> import('./pages/Home'));


const RouterComponent =()=>{
   return (
    <Router>
        <Suspense fallback={<div/>}>
        <Switch>
            <PageWrapper>
            <Route path="/" component={Home} />
            </PageWrapper>
        </Switch>
        </Suspense>
    </Router>
   )
}

export default RouterComponent;