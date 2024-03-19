import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ParentDashboardPage from './pages/ParentDashboardPage';

import AuthPage from './pages/AuthPage';
import TutorCard from './components/TutorCard';

// import TutorSearchBar from './components/TutorSearchBar';
// import TutorSearchPage from './pages/TutorSearchPage';


// import { useEffect, useState } from 'react';

// import { getAllData } from './util/index';

// const URL = 'http://localhost:8000/api/v1/';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage parentButtonText="I'm a parent" tutorButtonText="I'm a tutor" />} />
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
                    {/* <Route path="/login" element={<LoginForm />} /> */}
                    <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
                    <Route path="/tutorcard" element={<TutorCard />} />
                    {/* <Route path="/tutorsearchbar" element={<TutorSearchBar />} />
                    <Route path="/tutorsearch" element={<TutorSearchPage />} /> */}
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
