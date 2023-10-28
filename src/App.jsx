import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Dashboard from './features/setup/Dashboard';
import PageNotFound from './features/pages/PageNotFound';
import Plan from './features/setup/Plan';
import Intervals from './features/intervals/Intervals';

function App() {
  return (
    <Router>
      <div className="h-screen flex items-center justify-center bg-slate-800">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout-plan/:minutes/:interval" element={<Plan />} />

          <Route path="/start-workout/:minutes" element={<Intervals />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
