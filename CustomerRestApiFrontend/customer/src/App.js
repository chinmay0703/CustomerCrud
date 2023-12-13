import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CustomerList from './components/Customerlist';
import Addcustomer from './components/Addcustomer';
import UpdateCustomer from './components/UpdateCustomer';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/addcustomer" element={<Addcustomer />} />
        <Route path="/updatecustomer" element={<UpdateCustomer />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
