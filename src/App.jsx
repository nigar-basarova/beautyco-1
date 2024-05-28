

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import './App.css';
import '../public/assets/css/Navbar.css';
import '../public/assets/css/Introduction.css';
import '../public/assets/css/NotFound.css'
import '../public/assets/css/Story.css';
import '../public/assets/css/Card.css';
import '../public/assets/css/CardTwo.css';
import '../public/assets/css/HowItWorks.css';


import React from 'react';
import NavbarKomponenti from './components/Navbar';
import Introduction from './components/Introduction';
import Story from './components/Story.';
import Card from './components/Card';
import HowItWorks from './components/HowItWorks';
import LastSection from './components/LastSection';
import ProductSection from './components/ProductSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing from react-router-dom
import NotFound from './containers/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './containers/Contact';
import Story1 from './containers/Story1';
function App() {
  return (
    <>
    
   
    <Router>
    <Navbar/>
      <div className="container">
        
       
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/story" element={<Story1 />} />
          <Route path="/product" element={<ProductSection/>} />
          <Route path="/blog" element={<HowItWorks />} />
      
          <Route path="/collections" element={<LastSection />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Story/>
   <ProductSection/>
   <HowItWorks/>
   <LastSection/>
      </div>
      <Footer/>
    </Router>

   


    </>
  );
}

export default App;
