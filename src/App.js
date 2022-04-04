import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dasboard/Dashboard';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact'
import Notfound from "./Components/Notfound/Notfound";
import Contextapi from './Components/Blog/Contextapi';
import Inlineblock from './Components/Blog/Inlineblock'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blog" element={<Blog />}>
          <Route path="contextapi" element={<Contextapi></Contextapi>} />
          <Route path="inlineblock" element={<Inlineblock></Inlineblock>} />
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
