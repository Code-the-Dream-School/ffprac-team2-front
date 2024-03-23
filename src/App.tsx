import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ParentDashboardPage from './pages/ParentDashboardPage';
import TutorSearchPage from './pages/TutorSearchPage';
import AuthPage from './pages/AuthPage';

// import TutorCard from './components/TutorCard';

// import { useEffect, useState } from 'react';

// import { getAllData } from './util/index';

// const URL = 'http://localhost:8000/api/v1/';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* <Route index element={<HomePage />} /> */}
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
                    <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
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
