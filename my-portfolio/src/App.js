import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <h1>Lance Bontrager</h1>
        <nav>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </nav>
      </header>

      <About />
      <Portfolio />
      <Resume />
      <Contact />

      <footer>Made with ❤︎ by Lance Bontrager</footer>
    </div>
  );
}

export default App;
