import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Dashboard from './components/Dashboard/dashboard.jsx';
import MarketPlace from './components/marketplace/marketplace.jsx';
import AuctionHouse from './components/AuctionHouse/AuctionHouse.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/marketplace" element={<MarketPlace />} />
                    <Route path="/auctionHouse" element={<AuctionHouse />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
