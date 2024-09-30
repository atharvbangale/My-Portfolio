import './App.css';
import { NavBar } from './Componant/NavBar';
import {Banner} from './Componant/Banner'
import {Skills} from './Componant/Skills'
import { Projects } from './Componant/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Componant/Footer';



function App() {


  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills  />
      <Projects/>
      <Footer/>
     
    </div>
  );
}

export default App;
