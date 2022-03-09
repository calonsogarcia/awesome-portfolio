import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ExpStud from './components/ExpStud';

function App() {
  return (
    <div className="App">
      <NavBar />

      <AboutMe />
      <Projects />
      <ExpStud />

      <Footer />
    </div>
  );
}

export default App;
