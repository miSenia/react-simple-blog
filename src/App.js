import { Routes, Route, Link } from 'react-router-dom';
import { Mainpage } from './pages/Mainpage';
import { Blogpage } from './pages/Blogpage';
import './App.css';

function App() {
  return (
    <div>
 <header>
  <a href='/'>HOME</a>
  <a href='/articles'>BLOG</a>
 </header>
 <Routes>
  <Route path="/" element={<Mainpage/>} />
  <Route path="/articles/:id" element={<Blogpage/>} /> 
 </Routes>

    </div>
  );
}

export default App;
