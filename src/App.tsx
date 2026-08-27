import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Notes from './pages/Notes';
import PastPapers from './pages/PastPapers';
import Courses from './pages/Courses';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resources" element={<Resources />} />
          <Route path="notes" element={<Notes />} />
          <Route path="past-papers" element={<PastPapers />} />
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
