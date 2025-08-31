import React from 'react';
import AuthComponent from './AuthComponent/AuthComponent';
import Dashboard from './Dashboard/Dashboard';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ContextApi from './context/ContextApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const handleAuthSuccess = (userData) => {
    console.log('Authentication successful:', userData);
    // You can handle the successful authentication here
    // For example: redirect to dashboard, store user data, etc.
  };

  return (

    <BrowserRouter>
      {/* <AuthComponent onAuthSuccess={handleAuthSuccess} /> */}
      <ContextApi>      

        <Routes>

          <Route path={'/'} element={<Navigate to={'/login'} />}/>
          <Route path={'/login'} element={<AuthComponent />} />
          <Route path={'/dashboard'} element={<Dashboard />}/>


        </Routes>

      </ContextApi>
      
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </BrowserRouter>
  );
}

export default App;