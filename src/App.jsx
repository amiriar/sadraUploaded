import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AppRoutes from './components/routes/AppRoutes';
import { useState , useEffect } from 'react';
import Loading from './helper/Loading';
// react-query

const App = () => {

  // const [loading , setLoading] = useState(true);





  return (
    <>
    <Suspense fallback={<Loading/>}>
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
    </Suspense>
    </>
  );
};

export default App;