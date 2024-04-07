import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ParentDashboardPage from './pages/ParentDashboardPage';
import TutorProfilePage from './pages/TutorProfilePage';
import TutorSearchPage from './pages/TutorSearchPage';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';

// import TutorCard from './components/TutorCard';

// import { useEffect, useState } from 'react';

// import { getAllData } from './util/index';

// const URL = 'http://localhost:8000/api/v1/';

//after login page tutorProfileForm is called if tutor radion button is checked

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
                    {/* <Route path="/login" element={<LoginForm />} /> */}
                    <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
                    <Route path="/tutor-profile" element={<TutorProfilePage />} />
                    {/* <Route path="/tutorcard" element={<TutorCard tutor={undefined} />} /> */}
                    <Route path="/tutorsearch" element={<TutorSearchPage />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Route>
            </Routes>
        </>
    );

    // const [message, setMessage] = useState('');
    // useEffect(() => {
    //   (async () => {
    //     const myData = await getAllData(URL);
    //     setMessage(myData.data);
    //   })();
    //   return () => {
    //     console.log('unmounting');
    //   };
    // }, []);
    // return (
    //   <>
    //     <h1>{message}</h1>
    //   </>
    // );
};

export default App;
