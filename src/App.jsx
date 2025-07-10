import React from 'react';
import './App.css';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';   
import TestPreparation from './pages/TestsPreparation/TestPreparation.jsx';
import IELTS from './pages/TestsPreparation/IELTS.jsx';
import PTE from './pages/TestsPreparation/PTE.jsx';
import SAT from './pages/TestsPreparation/SAT.jsx';
import Universities from './pages/Universities/Universities.jsx';
import Serviceus from './pages/Serviceus/Content.jsx';
import PopularCourse from './pages/Popular-course/Courses.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Aboutus from './pages/Aboutus/About.jsx';
import Reviews from './pages/Reviews/Review.jsx';
import Footer from './components/Footer/Footer.jsx';
import Austraila from './pages/Study-abroad/Austraila.jsx';
import StudyAbroad from './pages/Study-abroad/StudyAbroad.jsx';
import Newzeland from './pages/Study-abroad/Newzeland.jsx';
import Uk from './pages/Study-abroad/Uk.jsx';
import Contact from './pages/Contactus/Contact.jsx';
import Contactus from './pages/Contactus/Contact.jsx';
import Address from './pages/Contactus/Address.jsx';
import Canada from './pages/Study-abroad/Canada.jsx';
import USA from './pages/Study-abroad/USA.jsx';


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

        <Route path="/study-abroad" element={<StudyAbroad/>} >
         <Route path="australia" element={<Austraila   />} />
          <Route path="new-zealand" element={<Newzeland/>} />
          <Route path="canada" element={<Canada />} />
           <Route path="uk" element={<Uk />} />
          <Route path="usa" element={<USA/>} />
          {/* <Route path="ireland" element={<SAT />} />
          <Route path="denmark" element={<SAT />} /> */}
        </Route>

        <Route path="/universities" element={<Universities />} />

        <Route path="/services" element={<Serviceus />} >
          {/* <Route path="screening" element={<IELTS />} />
          <Route path="application" element={<PTE />} />
          <Route path="documentation" element={<SAT />} />
          <Route path="interview" element={<IELTS />} />
          <Route path="scholarship" element={<PTE />} />
          <Route path="visa-declaration" element={<SAT />} />
          <Route path="offer-letter" element={<SAT />} />
          <Route path="letter-confirmation" element={<IELTS />} />
          <Route path="counseling" element={<PTE />} />
          <Route path="pre-departure" element={<SAT />} />
          <Route path="visa-lodgement" element={<SAT />} /> */}
        </Route>

        <Route path="/popular-courses" element={<PopularCourse />} >
         {/* <Route path="IT" element={<PTE />} />
          <Route path="Agriculture" element={<SAT />} />
          <Route path="MBA" element={<SAT />} />
          <Route path="Architecture" element={<IELTS />} />
          <Route path="Law" element={<PTE />} />
          <Route path="Pure-Sciences" element={<SAT />} />
          <Route path="Arts" element={<SAT />} /> */}
        </Route>

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/aboutus" element={<Aboutus />} >
        {/* <Route path="Introduction" element={<PTE />} />
          <Route path="Objectives" element={<SAT />} />

          <Route path="Gallery" element={<SAT />} >
          <Route path="Albums" element={<PTE />} />
          <Route path="Video Gallery" element={<SAT />} />
        </Route> */}

        </Route>
        <Route path="/contact" element={<Address />} >

        <Route path="enquiry" element={<Contact />} />
        </Route>
        <Route path="/review" element={<Reviews />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
