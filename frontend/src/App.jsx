import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderComplete from './pages/OrderComplete';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import { ProtectFormRoute, ProtectOrderRoute } from './ProtectRoutes/ProtectRoute';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />

        {/* ******************** Protect Routes */}
        <Route  element={<ProtectOrderRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-complete" element={<OrderComplete />} />
        </Route>
        {/* *********************************** */}

        <Route  element={<ProtectFormRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
        </Route>
        


      </Routes>
    </>
  )
}

export default App
