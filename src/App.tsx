import './App.css';

import { Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import ParentDashboardPage from './pages/ParentDashboardPage';
import TutorDashboard from './pages/TutorDashboard';
import TutorSearchPage from './pages/TutorSearchPage';

// import TutorProfileMult from './components/TutorProfileMult';

// import Sample from './components/Sample';
// import Sample01 from './components/Sample';

// import SubjectFilter from './components/SubjectFilter';

// import TutorCard from './components/TutorCard';

// import AuthPage from './pages/AuthPage';

// import Sample from './components/SubjectFilter';
// import SubjectFilter from './components/SubjectFilter';

// import TutorCard from './components/TutorCard';

// import { useEffect, useState } from 'react';

// import { getAllData } from './util/index';

// const URL = 'http://localhost:8000/api/v1/';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
                    {/* <Route path="/login" element={<LoginForm />} /> */}
                    <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
                    <Route path="/tutorsearch" element={<TutorSearchPage />} />
                    <Route path="/tutordashboard" element={<TutorDashboard />} />
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
