import { Navigate, Route, Routes } from 'react-router-dom';

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
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/parentdashboard" element={<ParentDashboardPage />} />
                    <Route path="/tutorprofile" element={<TutorProfilePage />} />
                    <Route path="/tutorsearch" element={<TutorSearchPage />} />
                    <Route path="/tutordashboard" element={<TutorDashboard />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/notFound" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate replace to="/notFound" />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
