import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomePage from './components/pages/HomePage/HomePage';
import SongsPage from './components/pages/SongsPage/SongsPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/songs" element={<SongsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
