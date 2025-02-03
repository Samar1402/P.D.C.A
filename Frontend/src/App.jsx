import React, { Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

// Lazy loading components
const Home = lazy(() => import("./Components/Home"));
const Login = lazy(() => import("./Components/Login"));
const Dashboard = lazy(() => import("./Components/Dashboard"));
const SignUp = lazy(() => import("./Components/SignUp"));
const Contact = lazy(() => import("./Components/Contact"));
const Notification = lazy(() => import("./Components/Notification"));
const Members = lazy(() => import("./Components/Members"));
const Gallery = lazy(() => import("./Components/Gallery"));
const MatchResults = lazy(() => import("./Components/MatchResults"));
const UpcomingMatches = lazy(() => import("./Components/UpcomingMatches"));
const Results = lazy(() => import("./Components/Results"));
const Forgetpswd = lazy(() => import("./Components/Forgetpswd"));
const About = lazy(() => import("./Components/About"));
const CommitteeMember = lazy(() => import("./Components/CommitteeMember"));
const AffiliatedMembers = lazy(() => import("./Components/AffiliatedMembers"));
const NonAffiliatedMembers = lazy(() =>
  import("./Components/NonAffiliatedMembers")
);
const DashboardItem = lazy(() => import("./Components/DashboardItem"));

// Protected Route component
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <LoginRedirect />;
};

// Login redirect component
const LoginRedirect = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/login"); // Redirect to login if not authenticated
  }, [navigate]);

  return <div>Redirecting to login...</div>;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Example auth state

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/members" element={<Members />} />
            <Route path="/media" element={<Gallery />} />
            <Route path="/results" element={<Results />} />
            <Route path="/matchresults" element={<MatchResults />} />
            <Route path="/upcomingmatches" element={<UpcomingMatches />} />
            <Route path="/forgot-password" element={<Forgetpswd />} />
            <Route path="/about/history" element={<About />} />
            <Route
              path="/about/committeeMembers"
              element={<CommitteeMember />}
            />
            <Route path="/affiliatedmembers" element={<AffiliatedMembers />} />
            <Route
              path="/nonaffiliatedmembers"
              element={<NonAffiliatedMembers />}
            />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute
                  element={<Dashboard />}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/dashboard/dashboard-item"
              element={
                <ProtectedRoute
                  element={<DashboardItem />}
                  isAuthenticated={isAuthenticated}
                />
              }
            />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

// 404 Not Found Component
const NotFound = () => {
  return <div>Page Not Found</div>;
};

export default App;
