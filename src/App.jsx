import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/Main/Home/MainPage';
import { BlogPage } from './pages/Blog/BlogPage';
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
