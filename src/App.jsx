import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";

import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
