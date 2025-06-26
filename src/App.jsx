import React from 'react';
import './App.css';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';   
import TestPreparation from './pages/TestsPreparation/TestPreparation.jsx';
import IELTS from './pages/TestsPreparation/IELTS.jsx';
import PTE from './pages/TestsPreparation/PTE.jsx';
import SAT from './pages/TestsPreparation/SAT.jsx';
import StudyAbroad from './pages/Study-abroad/Study-abroad.jsx';
import Universities from './pages/Universities/Universities.jsx';
import Serviceus from './pages/Serviceus/Content.jsx';
import PopularCourse from './pages/Popular-course/Courses.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Aboutus from './pages/Aboutus/About.jsx';
import Reviews from './pages/Reviews/Review.jsx';
import Contactus from './pages/Contactus/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-preparation" element={<TestPreparation />}>
          <Route path="ielts" element={<IELTS />} />
          <Route path="pte" element={<PTE />} />
          <Route path="sat" element={<SAT />} />
        </Route>

        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/services" element={<Serviceus />} />
        <Route path="/popular-courses" element={<PopularCourse />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
