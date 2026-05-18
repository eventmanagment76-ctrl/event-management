import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

// MAIN PAGES
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Blogs from "./Blogs";
import Contact from "./Contact";

// BLOGS
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";
import Blog5 from "./Blog5";
import Blog6 from "./Blog6";
import Blog7 from "./Blog7";
import Blog8 from "./Blog8";
import Blog9 from "./Blog9";

// SERVICES PAGES (FIXED SPELLING + PATHS)
import Corporate from "./Corporate";
import Conference from "./Conference";
import Product from "./Product";
import Exhibition from "./Exhibition";
import Brand from "./Brand";
import Team from "./Team";
import Experiential from "./Experiential";
import Social from "./Social";
import Artists from "./Artists";

function Root() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}>

        
          <Route index element={<Home />} />

         
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />

         
          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3 />} />
          <Route path="blog4" element={<Blog4 />} />
          <Route path="blog5" element={<Blog5 />} />
          <Route path="blog6" element={<Blog6 />} />
          <Route path="blog7" element={<Blog7 />} />
          <Route path="blog8" element={<Blog8 />} />
          <Route path="blog9" element={<Blog9 />} />

          
          <Route path="services/Corporate" element={<Corporate />} />
          <Route path="services/Conference" element={<Conference />} />
          <Route path="services/product" element={<Product />} />
          <Route path="services/exhibition" element={<Exhibition />} />
          <Route path="services/brand" element={<Brand />} />
          <Route path="services/team" element={<Team />} />
          <Route path="services/experiential" element={<Experiential />} />
          <Route path="services/social" element={<Social />} />
          <Route path="services/artists" element={<Artists />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);