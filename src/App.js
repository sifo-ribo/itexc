
import './App.css';
import Home from './components/home';
import About from './components/about';
import Getapp from './components/getapp';
import  Finddoctor  from './components/finddoctor';
import Visits from './components/visits';
import Hospitalsearch from "./components/hospitalsearch";
import Testimonial from './components/testimonial';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from './components/faq';
import Greatdoctors from './components/greatdoctors';
import Contact from './components/contact';
import Maps from './components/maps';
import Footer from './components/foter';
import NavScrollExample from "./components/navbarb";
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <NavScrollExample/>
      <Home/>
      <About/>
      <Getapp/>
      <Finddoctor/>
      <Visits/>
      <Hospitalsearch/>
      <Testimonial/>
      <Faq/>
      <Greatdoctors/>
      <Contact/>
      <Maps/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
