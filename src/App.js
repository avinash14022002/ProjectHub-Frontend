import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/pages/about-us/About'
import Contact from './components/pages/contact/Contact'
import Home from './components/pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;