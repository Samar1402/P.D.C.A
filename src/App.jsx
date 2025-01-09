import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import Notification from "./Components/Notification";
import Members from "./Components/Members";
import Gallery from "./Components/Gallery";
import CommitteeMember from "./Components/CommitteeMember";
import MatchResults from "./Components/MatchResults";
import UpcomingMatches from "./Components/UpcomingMatches";
import Results from "./Components/Results";
import Forgetpswd from "./Components/Forgetpswd";
import AffliatedMembers from "./Components/AffliatedMembers";
import NonAffliatedMembers from "./Components/NonAffliatedMembers";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/notifications" element={<Notification />}></Route>
          <Route path="/members" element={<Members />}></Route>
          <Route path="/media" element={<Gallery />}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route path="/matchresults" element={<MatchResults />}></Route>
          <Route path="/upcomingmatches" element={<UpcomingMatches />}></Route>
          <Route path="/forgot-password" element={<Forgetpswd />}></Route>
          <Route path="/about/history" element={<About />}></Route>
          <Route
            path="/affliatedmembers"
            element={<AffliatedMembers />}
          ></Route>
          <Route
            path="/nonaffliatedmembers"
            element={<NonAffliatedMembers />}
          ></Route>

          <Route
            path="/about/committeeMembers"
            element={<CommitteeMember />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
