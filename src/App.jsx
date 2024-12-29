import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";

import { Route, Routes } from "react-router-dom";
import Members from "./Components/Members";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Routes>
        <Route path="members" Component={Members} />
      </Routes>
    </>
  );
}

export default App;
