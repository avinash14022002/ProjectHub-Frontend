import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import './App.css';

const App = () => {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
        </div>
        <Footer />
      </div>
    );
};
  
export default App;