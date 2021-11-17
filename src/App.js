import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about-us/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import AllProjects from './pages/all-projects/AllProjects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectDetails from './pages/project-detailed-page/ProjectDetails';
import CompletedGuidedProjects from './pages/completed-guided-projects/CompletedGuidedProjects';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/project-details/:projectId' component={ProjectDetails} />
            <Route exact path='/all-projects' component={AllProjects} />
            <Route exact path='/completed-guided-projects' component={CompletedGuidedProjects} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;