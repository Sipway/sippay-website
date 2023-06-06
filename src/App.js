
import './App.css';
import Brands from './components/Brands/Brands';
import InfoBox1 from './components/InfoBox1/InfoBox1';
import InfoBox2 from './components/InfoBox2/InfoBox2';
import ReverseBrand from './components/ReverseBrand/ReverseBrand';
import Header from './components/header/Header';
import MainTitle from './components/maintitle/MainTitle';
import Why from './components/why/Why';

function App() {
 


  return (
    <div className='app'>
      <Header />
      <MainTitle />
      <Brands />
      <div style={{ margin: '20px' }}></div> {/* Add a margin for the gap */}
      <ReverseBrand />
      <div style={{ margin: '80px' }}></div> {/* Add a margin for the gap */}
      <Why />
      <div style={{ margin: '80px' }}></div> {/* Add a margin for the gap */}
      <InfoBox1 />
      <InfoBox2 />
    </div>
  );
}

export default App;
