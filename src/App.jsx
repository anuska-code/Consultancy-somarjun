import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import TestPreparation from "./pages/TestsPreparation/TestPreparation.jsx";
import IELTS from "./pages/TestsPreparation/IELTS.jsx";
import PTE from "./pages/TestsPreparation/PTE.jsx";
import SAT from "./pages/TestsPreparation/SAT.jsx";
import Universities from "./pages/Universities/Universities.jsx";
import PopularCourse from "./pages/Popular-course/Courses.jsx";
import Reviews from "./pages/Reviews/Review.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Austraila from "./pages/Study-abroad/Austraila.jsx";
import StudyAbroad from "./pages/Study-abroad/StudyAbroad.jsx";
import Newzeland from "./pages/Study-abroad/Newzeland.jsx";
import Uk from "./pages/Study-abroad/Uk.jsx";
import Contact from "./pages/Contactus/Contact.jsx";
import Address from "./pages/Contactus/Address.jsx";
import Canada from "./pages/Study-abroad/Canada.jsx";
import USA from "./pages/Study-abroad/USA.jsx";
import Ireland from "./pages/Study-abroad/Ireland.jsx";
import Denmark from "./pages/Study-abroad/Denmark.jsx";
import Blog from "./pages/Blogs/Blog.jsx";
import Introduction from "./components/About/Introduction.jsx";
import Aboutus from "./pages/Aboutus/Aboutus.jsx";
import Objectives from "./components/About/Objectives.jsx";
import Albums from "./components/About/Gallery/Albums.jsx";
import IT from "./pages/Popular-course/IT.jsx";
import Agriculture from "./pages/Popular-course/Agriculture.jsx";
import MBA from "./pages/Popular-course/MBA.jsx";
import ArchitectureMain from "./components/PopularCourses/ArchitectureGuide/ArchitectureMain.jsx";
import Law from "./pages/Popular-course/Law.jsx";
import Science from "./pages/Popular-course/Science.jsx";
import Arts from "./pages/Popular-course/Arts.jsx";
import VideoGallery from "./components/About/Gallery/VideoGallery.jsx";
import Interview from "./pages/Serviceus/Interview.jsx";
import Service from "./pages/Serviceus/Service.jsx";
import Doc from "./pages/Serviceus/Doc.jsx";
import Accounts from "./pages/Serviceus/Accounts.jsx";
import Screen from "./pages/Serviceus/Screen.jsx";
import UniApp from "./pages/Serviceus/UniApp.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";




function App() {
  return (
    <Router>
     
      <ScrollToTop/>
     
     
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/test-preparation" element={<TestPreparation />}>
          <Route path="ielts" element={<IELTS />} />
          <Route path="pte" element={<PTE />} />
          <Route path="sat" element={<SAT />} />
        </Route>

        <Route path="/study-abroad" element={<StudyAbroad />}>
          <Route path="australia" element={<Austraila />} />
          <Route path="new-zealand" element={<Newzeland />} />
          <Route path="canada" element={<Canada />} />
          <Route path="uk" element={<Uk />} />
          <Route path="usa" element={<USA />} />
          <Route path="ireland" element={<Ireland />} />
          <Route path="denmark" element={<Denmark />} />
        </Route>

        <Route path="/universities" element={<Universities />} />

        <Route path="/services" element={<Service/>}>
          <Route path="student-screening" element={<Screen/>} />
          <Route path="university-application" element={<UniApp/>} />
          <Route path="documentation" element={<Doc/>} />
          <Route path="interview-assistance" element={<Interview/>} />
          <Route path="accounts" element={<Accounts/>} />
        </Route>

        <Route path="/courses" element={<PopularCourse />}>
          <Route path="information-technology-australia" element={<IT />} />
          <Route path="agriculture-australia" element={<Agriculture />} />
          <Route path="mba-australia" element={<MBA />} />
          <Route path="architecture-australia" element={<ArchitectureMain />} />
          <Route path="law-australia" element={<Law />} />
          <Route path="applied-pure-sciences-australia" element={<Science />} />
          <Route path="arts-australia" element={<Arts />} />
        </Route>

        <Route path="/blogs" element={<Blog />} />

        <Route path="/about" element={<Aboutus />}>
          <Route path="introduction" element={<Introduction />} />
          <Route path="objectives" element={<Objectives />} />
          <Route path="gallery" element={<Albums />}>
            <Route path="albums" element={<Albums />} />
          </Route>
          <Route path="gallery/video" element={<VideoGallery />} />
        </Route>

        <Route path="/contact" element={<Address />}>
          <Route path="enquiry" element={<Contact />} />
        </Route>
        <Route path="/review" element={<Reviews />} />
      </Routes>
      <Footer />
     
    </Router>
    
  );
}

export default App;
