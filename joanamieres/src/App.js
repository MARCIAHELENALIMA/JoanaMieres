import logo from './logo.svg';
import './App.css';
import Index from './content';
import Sobre from './content/sobre';
import Servicos from './content/servicos/servicos';
import SignUp from './content/blog/signup';
import LoginOn from './content/blog/login';
import Blog from './content/blog/blog'
import EmbeddedSite from './content/blog/embbedSite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/signup' element={<SignUp />} />
        <Route path='/blog/login' element={<LoginOn />} />
        <Route path='/blog/admindashboard' element={<EmbeddedSite />} />
      </Routes>
    </Router>
  );
}

export default App;
