import './App.css';

import { Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import ParentDashboardPage from './pages/ParentDashboardPage';
import TutorDashboard from './pages/TutorDashboard';
import TutorProfilePage from './pages/TutorProfilePage';
import TutorSearchPage from './pages/TutorSearchPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/auth" element={<AuthPage activeTab={'login'} />} />
                    <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
                    <Route path="/tutor-profile" element={<TutorProfilePage />} />
                    <Route path="/tutorsearch" element={<TutorSearchPage />} />
                    <Route path="/tutordashboard" element={<TutorDashboard />} />
                    <Route path="/404" element={<NotFoundPage />} />

                    <Route path="/404" element={<NotFoundPage />} />

                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                    <Route path="/about" element={<AboutPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
