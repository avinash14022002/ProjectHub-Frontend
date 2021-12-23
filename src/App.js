import React, { useState, useEffect, useContext }  from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GenericNavbar from './components/navbar/GenericNavbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import About from './pages/about-us/About'
import Contact from './pages/contact/Contact'
import LoginForm from './pages/login/LoginForm'
import AllProjects from './pages/all-projects/AllProjects';
import ProjectDetails from './pages/project-detailed-page/ProjectDetails';
import CompletedGuidedProjects from './pages/completed-guided-projects/CompletedGuidedProjects';
import { LoginContext, LoginProvider } from './contexts/LoginContext';
import './App.css';

function App() {
  const { userAuthenticationStatus, setUserAuthenticationStatus, userSignInInfo, setUserSignInInfo } = useContext(LoginContext);
  
  return (
    <Router>
      <LoginProvider>
        <div className="page-container">
          <div className="content-wrap">
            <GenericNavbar />
            {[userAuthenticationStatus, userSignInInfo]}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/project-details/:projectId' component={ProjectDetails} />
              <Route exact path='/all-projects'>
                <AllProjects url="http://localhost:8080/api/studentProject" />
              </Route>
              <Route exact path='/student/completed-projects' component={CompletedGuidedProjects} />
              <Route exact path='/teacher/guided-projects' component={CompletedGuidedProjects} />
              <Route exact path='/admin/input-students-data'> 
                {/* To be Entered by Dhanashree */}
              </Route>
              <Route exact path='/admin/input-teachers-data'> 
                  {/* To be Entered by Dhanashree */}
              </Route>
              <Route exact path='/student/sign-in'> 
                {!userAuthenticationStatus ? (<LoginForm role="student" url="http://localhost:8080/studentlogin" />) : (<Redirect to="/" />)}
              </Route>
              <Route exact path='/teacher/sign-in'> 
                {!userAuthenticationStatus ? (<LoginForm role="teacher" url="http://localhost:8080/teacherlogin" />) : (<Redirect to="/" />)}
              </Route>
              <Route exact path='/admin/sign-in'> 
                {!userAuthenticationStatus ? (<LoginForm role="admin" url="http://localhost:8080/adminlogin"  />) : (<Redirect to="/" />)}
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </LoginProvider>
    </Router>
  );
}

export default App;