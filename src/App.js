import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GenericNavbar from './components/navbar/GenericNavbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import About from './pages/about-us/About'
import Contact from './pages/contact/Contact'
import LoginForm from './pages/login/LoginForm'
import AllProjects from './pages/all-projects/AllProjects';
import ProjectDetails from './pages/project-detailed-page/ProjectDetails';
import CompletedGuidedProjects from './pages/completed-guided-projects/CompletedGuidedProjects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <GenericNavbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/project-details/:projectId' component={ProjectDetails} />
            <Route exact path='/all-projects' component={AllProjects} />
            <Route exact path='/completed-guided-projects' component={CompletedGuidedProjects} />
            <Route exact path='/admin/input-students-data'> 
               {/* To be Entered by Dhanashree */}
            </Route>
            <Route exact path='/admin/input-teachers-data'> 
                {/* To be Entered by Dhanashree */}
            </Route>
            <Route exact path='/student/sign-in'> 
                <LoginForm role="student" url="http://localhost:8080/studentlogin" />
            </Route>
            <Route exact path='/teacher/sign-in'> 
                <LoginForm role="teacher" url="http://localhost:8080/teacherlogin" />
            </Route>
            <Route exact path='/admin/sign-in'> 
                <LoginForm role="admin" url="http://localhost:8080/adminlogin" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;