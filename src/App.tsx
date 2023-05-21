import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="details" element={<Detail />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
