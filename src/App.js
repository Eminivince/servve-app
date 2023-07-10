import './App.css';
import Accordion from './components/Accordion';
import BestServices from './components/BestServices';
import Blog from './components/Blog';
import Categories from './components/Categories';
import ForHome from './components/ForHome';
import HowItWorks from './components/HowItWorks';
import Popular from './components/Popular';
import Shop from './components/Shop';
import Testimonial from './components/Testimonial';
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
      <Testimonial />
      <HowItWorks />
      <Blog />
    </div>
  );
}

export default App;
