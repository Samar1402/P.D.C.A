import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import CommitteeMember from "./Components/CommitteeMember";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <CommitteeMember /> */}
      <Gallery />
    </>
  );
}

export default App;
