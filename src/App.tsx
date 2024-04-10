import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ParentDashboardPage from './pages/ParentDashboardPage';
import TutorProfilePage from './pages/TutorProfilePage';
import TutorSearchPage from './pages/TutorSearchPage';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';

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
};

export default App;
