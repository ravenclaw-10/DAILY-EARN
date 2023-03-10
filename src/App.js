import './App.css';
import Header from './components/Header';
import MiddleContent from './components/MiddleContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div class="header">
        <Header />
        <MiddleContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
