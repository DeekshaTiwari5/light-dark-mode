import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Blog from "../pages/blog";
import Home from "../pages/home";
import Navbar from "../pages/Navbar";
import { ThemeProvider } from "../theme-context";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
