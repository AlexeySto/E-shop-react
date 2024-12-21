import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import RegistrationPage from './pages/RegistrationPage';


const App = () => {
    return (
        <div className="desktop_index">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                </Routes>
                <Subscribe />
                <Footer />
            </Router>
        </div>
    );
};

export default App;