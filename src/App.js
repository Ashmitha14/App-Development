// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home'; 
import PlantCare from './components/PlantCare';
import Cart from './components/Cart';
import GardenTools from './components/GardenTools';
import PlantGrowth from './components/PlantGrowth';
import GardenLayout from './components/GardenLayout';
import AboutUs from './components/AboutUs';
import Plant from './components/Plant';
import ContactUs from './components/ContactUs';
import FlowerCare from './components/FlowerCare';
import IndoorCare from './components/IndoorCare';
import VegetableCare from './components/VegetableCare';
import IndoorPlants from './components/IndoorPlants';
import OutdoorPlants from './components/OutdoorPlants';
import PlantRecommendations from './components/PlantRecommendations';
import Chatbox from './components/Chatbox';
import Weather from './components/Weather';
import PlantInfo from './components/PlantInfo';
import SeedsPage from './components/SeedsPage';
import GetInTouch from './components/GetInTouch';
import Checkout from './components/Checkout';
import Manure from './components/Manure';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/home' element={<Home />} />
        <Route path='/plant' element={<PlantCare />} />
        <Route path='/' element={<Home />} />
        <Route path="/tools" element={<GardenTools/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/growth" element={<PlantGrowth />} />
        <Route path="/layout" element={<GardenLayout />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<Plant />} />
        <Route path="/plantd" element={<PlantRecommendations />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/fcare" element={<FlowerCare />} />
        <Route path="/indoor" element={<IndoorCare />} />
        <Route path="/vegetable" element={<VegetableCare />} />
        <Route path="/indoorp" element={<IndoorPlants />} />
        <Route path="/outdoor" element={<OutdoorPlants />} />
        <Route path="/chat" element={<Chatbox />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/plantinfo" element={<PlantInfo />} />
        <Route path="/seeds" element={<SeedsPage />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/manure" element={<Manure />} />
        {/* <Route path="/settings" element={<Settings />} /> */}

      </Routes>
    </Router>
    
  );
}

export default App;
