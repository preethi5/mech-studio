import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import VehicleGrid from './components/VehicleGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>
      <VehicleGrid></VehicleGrid>
      {/* should be entire width so no need of container */}
      <Footer></Footer>
    </div>
  );
}

export default App;
