import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import AuthCallback from './features/authentication/AuthCallback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/fitbit" element={<AuthCallback />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
