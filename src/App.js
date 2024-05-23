import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Project from './Project';
import Resume from './Resume';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
