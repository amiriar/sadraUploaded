import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AppRoutes from './components/routes/AppRoutes';
import { useState , useEffect } from 'react';
import Loading from './helper/Loading';
// react-query

const App = () => {

  const [loading , setLoading] = useState(true);


  useEffect(()=> {
      setLoading(false)
  } , [])


  return (
    <>
  {loading && <Loading/>}

    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
    </>
  );
};

export default App;