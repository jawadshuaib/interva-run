import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import OAuthCallback from './features/authentication/OAuthCallback';
import Test from './features/dashboard/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/auth/fitbit" element={<OAuthCallback />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
