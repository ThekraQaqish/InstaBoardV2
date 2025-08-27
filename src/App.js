import './App.css';
import Team from './components/Team/Team';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';

import {useState , useEffect} from 'react';
import TeamDetails from './components/TeamDetails/TeamDetails';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import LikedUsers from './components/LikedUsers/LikedUsers';


function App() {
  const [darkMode, setDarkMode] = useState(() => {
  const savedMode = localStorage.getItem('darkMode');
  return savedMode === 'true' ? true : false;
});


  const toggleDarkMode = () => {
  setDarkMode(prev => {
    const newMode = !prev;
    localStorage.setItem('darkMode', newMode);
    return newMode;
  });
};

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/team" element={<Team darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/team/:id" element={<TeamDetails darkMode={darkMode}/>}/>
          <Route path="/liked-users" element={<LikedUsers darkMode={darkMode} />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
