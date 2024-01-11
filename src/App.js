import logo from './logo.svg';
import "the-new-css-reset/css/reset.css";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Menu from './components/Menu';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Menu />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
