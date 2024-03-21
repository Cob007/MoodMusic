import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import SongsPage from './components/pages/SongsPage/SongsPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/songs/:userId" element={<SongsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
