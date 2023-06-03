
import './App.css';
import Brands from './components/Brands/Brands';
import ReverseBrand from './components/ReverseBrand/ReverseBrand';
import Header from './components/header/Header';
import MainTitle from './components/maintitle/MainTitle';

function App() {
 


  return (
    <div className='app'>
      <Header />
      <MainTitle />
      <Brands />
      <div style={{ margin: '20px' }}></div> {/* Add a margin for the gap */}
      <ReverseBrand />
    </div>
  );
}

export default App;
