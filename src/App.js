import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import GenericNavbar from './components/navbar/GenericNavbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about-us/About';
import Contact from './pages/contact/Contact';
import LoginForm from './pages/login/LoginForm';
import AllProjects from './pages/all-projects/AllProjects';
import ProjectDetails from './pages/project-detailed-page/ProjectDetails';
import CompletedGuidedProjects from './pages/completed-guided-projects/CompletedGuidedProjects';
import StudentOngoingProject from './pages/student-ongoing-project/StudentOngoingProject';
import TeacherOngoingProjects from './pages/teacher-ongoing-projects/TeacherOngoingProjects';
import TeacherCreateProject from './pages/teacher-create-project/TeacherCreateProject';
import TeacherOngoingProjectDetails from './pages/teacher-ongoing-project-details/TeacherOngoingProjectDetails';
import UploadStudents from './pages/upload-students/UploadStudents';
import UploadTeachers from './pages/upload-teachers/UploadTeachers';
import ExistingStudents from './pages/existing-students/ExistingStudents';
import ExistingTeachers from './pages/existing-teachers/ExistingTeachers';
import ChangePasswordForm from './pages/change-passowrd/ChangePasswordForm';
import ResourceNotFound from './pages/404-error/ResourceNotFound';
import { LoginProvider } from './contexts/LoginContext';
import './App.css';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_DOMAIN;
console.log(axios.defaults.baseURL, process.env.REACT_APP_BACKEND_DOMAIN);

function App() {
  return (
    <Router>
      <LoginProvider>
        <div className="page-container">
          <div className="content-wrap">
            <GenericNavbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/student/sign-in'> 
                <LoginForm role="student" url="/auth/studentLogin" />
              </Route>
              <Route exact path='/teacher/sign-in'> 
                <LoginForm role="teacher" url="/auth/teacherLogin" />
              </Route>
              <Route exact path='/admin/sign-in'> 
                <LoginForm role="admin" url="/auth/adminLogin" />
              </Route>
              <ProtectedRoute exact path='/student/change-password/:userId'>
                <ChangePasswordForm role="student" url="/auth/changePassword" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/change-password/:userId'>
                <ChangePasswordForm role="teacher" url="/auth/changePassword" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/all-projects'>
                <AllProjects studentUrl="/api/studentProject" teacherUrl="/api/teacherProject" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/project-details/:projectId'>
                <ProjectDetails studentUrl="/api/projectDetails" teacherUrl="/api/teacherProjectDetails" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/student/completed-projects/:userId'>
                <CompletedGuidedProjects url="/api/studentProfileDetails" role="student" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/student/ongoing-project'>
                <StudentOngoingProject 
                    projectIdUrl="/api/studentOngoing" 
                    projectDetailsUrl="/api/projectDetails" 
                    updateProjectDetailsUrl="/api/studentProject" 
                />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/guided-projects/:userId'>
                <CompletedGuidedProjects url="/api/teacherProfile" role="teacher" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/ongoing-projects/:userId'>
                <TeacherOngoingProjects url="/api/teacherOngoing" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/create-project'>
                <TeacherCreateProject url="/api/addNewProject" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/ongoing-projects/project-details/:projectId'>
                <TeacherOngoingProjectDetails 
                  projectDetailsUrl="/api/teacherProjectDetails" 
                  updateDeadlineUrl="/api/updateDeadline"
                  closeProjectUrl="/api/closeProject">
                </TeacherOngoingProjectDetails>
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/upload-students'>
                <UploadStudents uploadUrl="/api/uploadStudent"/>
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/upload-teachers'>
                <UploadTeachers uploadUrl="/api/uploadTeacher"/>
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/existing-students'>
                <ExistingStudents fetchUrl="/api/students" downloadUrl="/api/student/download/students.csv" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/existing-teachers'>
                <ExistingTeachers fetchUrl="/api/teacher" downloadUrl="/api/teacher/download/teachers.csv" />
              </ProtectedRoute>
              <Route path="*" component={ResourceNotFound}/>
            </Switch>
            <Footer />
          </div>
        </div>
      </LoginProvider>
    </Router>
  );
}

export default App;