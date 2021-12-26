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
import UploadStudents from './pages/upload-students/UploadStudents';
import UploadTeachers from './pages/upload-teachers/UploadTeachers';
import ExistingStudents from './pages/existing-students/ExistingStudents';
import ExistingTeachers from './pages/existing-teachers/ExistingTeachers';

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
            <Route exact path='/admin/existing-students' component={ExistingStudents} />
            <Route exact path='/admin/existing-teachers' component={ExistingTeachers} />
            <Route exact path='/admin/upload-students' component={UploadStudents} />
            <Route exact path='/admin/upload-teachers' component={UploadTeachers} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;