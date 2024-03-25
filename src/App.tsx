import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ParentDashboardPage from './pages/ParentDashboardPage';

<<<<<<< HEAD
<<<<<<< HEAD
import TutorSearchPage from './pages/TutorSearchPage';
=======
>>>>>>> updated bg, added redirect to login page
=======
>>>>>>> 7a1811afcdacf6268f80cab94eddd5bef54b523a
import AuthPage from './pages/AuthPage';

// import TutorCard from './components/TutorCard';

// import TutorSearchBar from './components/TutorSearchBar';
// import TutorSearchPage from './pages/TutorSearchPage';

<<<<<<< HEAD
<<<<<<< HEAD
import LandingPage from './pages/LandingPage'

=======
>>>>>>> updated bg, added redirect to login page
=======
>>>>>>> 7a1811afcdacf6268f80cab94eddd5bef54b523a

// import { useEffect, useState } from 'react';

// import { getAllData } from './util/index';

// const URL = 'http://localhost:8000/api/v1/';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
<<<<<<< HEAD
<<<<<<< HEAD
                    {/* <Route index element={<HomePage />} /> */}
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
=======
>>>>>>> updated bg, added redirect to login page
                    <Route index element={<LandingPage parentButtonText="I'm a parent" tutorButtonText="I'm a tutor" />} />
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
=======
                    <Route index element={<LandingPage parentButtonText="I'm a parent" tutorButtonText="I'm a tutor" />} />
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
>>>>>>> 7a1811afcdacf6268f80cab94eddd5bef54b523a
                    {/* <Route path="/login" element={<LoginForm />} /> */}
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
