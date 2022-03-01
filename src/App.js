import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <div>
      
            <BrowserRouter>
            <Header></Header>
       <Routes>
         <Route  exact path='/' element={<Home/>} />
         <Route path='/home'element={<Home/>} />
         <Route path='/courses' element={<Courses/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>} />
         <Route path='/login' element={ <Login/> } />
         <Route path='/*' element={ <NotFound/> } />
       </Routes>
     
            </BrowserRouter>
           
       </div>
       <Footer></Footer>
    </div>
  );
}

export default App;
