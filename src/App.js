import './App.css';
import Accordion from './components/Accordion';
import BestServices from './components/BestServices';
import Categories from './components/Categories';
import ForHome from './components/ForHome';
import Popular from './components/Popular';
import Shop from './components/Shop';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Homepage />
      <Categories />
      <Popular />
      <ForHome />
      <Shop />
      <BestServices />
      <Accordion />
    </div>
  );
}

export default App;
