import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './components/UserComponent'; 
import Products from './components/Products';   

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/users" className="mr-4">Users</Link>
          <Link to="/products">Products</Link>
        </nav>
        
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
