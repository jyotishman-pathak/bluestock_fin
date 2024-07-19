
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from "./pages/Home";
import UpcomingIPO from './pages/UpcomingIPOsPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-ipo" element={<UpcomingIPO />} />
      </Routes>
    </Router>
  );
};

export default App;
