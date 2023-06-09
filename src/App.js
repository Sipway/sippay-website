
import './App.css';
import { BrowserRouter,Route,Switch,Redirecct, Routes } from 'react-router-dom';

import Brands from './components/Brands/Brands';
import InfoBox1 from './components/InfoBox1/InfoBox1';
import InfoBox2 from './components/InfoBox2/InfoBox2';
import Login from './components/Login/Login';
import QuizPage from './components/Quiz/QuizPage';
import ReverseBrand from './components/ReverseBrand/ReverseBrand';
import Header from './components/header/Header';
import MainTitle from './components/maintitle/MainTitle';
import Why from './components/why/Why';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';


function App() {
 


  return (
    <div className='app'>
      <Header />
      <MainTitle />
      <br></br>

      <Brands />
       <br></br>
        
       <ReverseBrand />
       <br></br>
      <Footer />
      </div>
  );
}

export default App;
