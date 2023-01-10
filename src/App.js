import React from 'react';
import MaingPage from './pages/MainPage/MaingPage';
import ListPage from './pages/ListPage/ListPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './common.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<MaingPage />} />
          <Route path="/list/:id" element={<ListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
