// import "the-new-css-reset/css/reset.css";
import './App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

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
