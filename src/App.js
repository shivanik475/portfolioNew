
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App__main-page-content">
      <Navbar></Navbar>
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
