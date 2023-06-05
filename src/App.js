
import './App.css';
import Brands from './components/Brands/Brands';
import InfoBox1 from './components/InfoBox/InfoBox';
import ReverseBrand from './components/ReverseBrand/ReverseBrand';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';
import Header from './components/header/Header';
import MainTitle from './components/maintitle/MainTitle';
import Why from './components/why/Why';

function App() {

  return (
    <div className='app'>
      <Header />
      <MainTitle />
      <div style={{ paddingBottom: '20px' }}>
        <Brands />
      </div>
      <div style={{ paddingBottom: '80px' }}>
        <ReverseBrand />
      </div>
      <Why />
      <InfoBox1 />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
