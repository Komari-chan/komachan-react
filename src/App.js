import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // 使用 HashRouter
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PixivPage from './components/PixivPage';
import GithubPage from './components/GithubPage';
import FeaturePage from './components/FeaturePage';
import BackgroundSwitcher from './components/BackgroundSwitcher';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundSwitcher />
        <Navbar />
        <header>
          <h1>Komachan</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pixiv" element={<PixivPage />} />
            <Route path="/github" element={<GithubPage />} />
            <Route path="/features" element={<FeaturePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
