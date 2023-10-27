import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Dashboard from './features/workout/Dashboard';
import PageNotFound from './features/pages/PageNotFound';
import Plan from './features/workout/Plan';
import Intervals from './features/intervals/Intervals';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-800">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workout-plan/:minutes" element={<Plan />} />
            <Route path="/start-workout/:minutes" element={<Intervals />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
