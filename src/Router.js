import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

const Home = lazy(()=> import('./pages/Home'));
const WebDesign = lazy(()=> import('./pages/WebDesign'));
const AppDesign = lazy(() => import('./pages/AppDesign'));
const GraphicsDesign = lazy(() => import('./pages/GraphicsDesign'));


const RouterComponent =()=>{
   return (
    <Router>
        <Suspense fallback={<div/>}>
        <Switch>
            <PageWrapper>
            <Route exact path="/" component={Home} />
            <Route path="/webdesign" component={WebDesign}/>
            <Route path="/appdesign" component={AppDesign} />
            <Route path="/graphicsdesign" component={GraphicsDesign} />
            </PageWrapper>
        </Switch>
        </Suspense>
    </Router>
   )
}

export default RouterComponent;