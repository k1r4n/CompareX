import React, {Suspense, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';

const Root = lazy(() => import('../components/root'));
const Home = lazy(() => import('../components/home'));

const Pages = () => <Suspense fallback={<div>Loader...</div>}>
  <Routes>
    <Route path={'/'} element={<Suspense fallback={<div>Loader...</div>}><Root /></Suspense>}>
      <Route index element={<Suspense fallback={<div>Loader...</div>}><Home /></Suspense>} />
    </Route>
  </Routes>
</Suspense>;


export default Pages;
