import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dasboard/Dashboard';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
