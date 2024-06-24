
import './App.css';
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Footer from './components/footer3';
// import Footer from './components/footer2';
// import Footer from './components/footer1';
// import Header from './components/header1';
import Header from './components/header2';
import { useState } from 'react';
import Error404 from './pages/404';
import ProductsPage from './pages/ProductsPage';
// import ProgramsPage from './pages/ProgramsPage';
import ProgramsPage from './pages/ProgramsPage2';
import AboutUsPage from './pages/AboutUsPage2';
// import AboutUsPage from './pages/AboutUsPage';
import AdminPage from './pages/AdminPage';
// import DonationPage from './pages/DonationPage';
import DonationPage from './pages/DonationPage2';
import AdminHeader from './components/adminHeader';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState([])
  const [successCheckout, setSuccessCheckout] = useState(false)

  return (
    <>
    <Routes>
    <Route path="/admin" element={<AdminHeader setAuthenticated={setAuthenticated}/>} />
    <Route path="*" element={<Header cart={cart} setTotal={setTotal} setCart={setCart}/>} />
    </Routes>
      

    <div className='main-content'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/what-we-do" element={<ProgramsPage />} />
        <Route path="/offers" element={<ProductsPage cart={cart} setCart={setCart} successCheckout={successCheckout} setSuccessCheckout={setSuccessCheckout} />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} total={total} setCart={setCart} setSuccessCheckout={setSuccessCheckout}/>} />
        <Route path="/admin" element={<AdminPage authenticated={authenticated}/>} />
        <Route path="/admin-login" element={<LoginPage setAuthenticated={setAuthenticated}/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
    
    
    <Routes>
    <Route path="/admin-login" element={<> </>} />
    <Route path="/admin" element={<> </>} />
    <Route path="*" element={<Footer />} />
    </Routes>

    </>
  );
}

export default App;
