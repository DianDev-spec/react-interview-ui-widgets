import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WidgetForm from './components/WidgetForm';
import WidgetList from './components/WidgetList';
import WidgetDetails from './components/WidgetDetails';
import WidgetUpdateForm from './components/WidgetUpdateForm';
import WidgetDeleteForm from './components/WidgetDeleteForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ToastContainer />
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create Widget</Link></li>
            <li><Link to="/list">List Widgets</Link></li>
            <li><Link to="/details">Widget Details</Link></li>
            <li><Link to="/update">Update Widget</Link></li>
            <li><Link to="/delete">Delete Widget</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/create" element={<WidgetForm />} />
          <Route path="/list" element={<WidgetList />} />
          <Route path="/details" element={<WidgetDetails />} />
          <Route path="/update" element={<WidgetUpdateForm />} />
          <Route path="/delete" element={<WidgetDeleteForm />} />
          <Route path="/" element={<h1 className="title">Welcome to the Widget App</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
