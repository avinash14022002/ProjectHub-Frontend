import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
                <LoginForm role="student" url="http://localhost:8080/auth/studentLogin" />
              </Route>
              <Route exact path='/teacher/sign-in'> 
                <LoginForm role="teacher" url="http://localhost:8080/auth/teacherLogin" />
              </Route>
              <Route exact path='/admin/sign-in'> 
                <LoginForm role="admin" url="http://localhost:8080/auth/adminLogin" />
              </Route>
              <ProtectedRoute exact path='/all-projects'>
                <AllProjects studentUrl="http://localhost:8080/api/studentProject" teacherUrl="http://localhost:8080/api/teacherProject" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/project-details/:projectId'>
                <ProjectDetails studentUrl="http://localhost:8080/api/projectDetails" teacherUrl="http://localhost:8080/api/teacherProjectDetails" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/student/completed-projects/:userId'>
                <CompletedGuidedProjects url="http://localhost:8080/api/studentProfileDetails" role="student" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/student/ongoing-project'>
                <StudentOngoingProject 
                    projectIdUrl="http://localhost:8080/api/studentOngoing" 
                    projectDetailsUrl="http://localhost:8080/api/projectDetails" 
                    updateProjectDetailsUrl="http://localhost:8080/api/studentProject" 
                />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/guided-projects/:userId'>
                <CompletedGuidedProjects url="http://localhost:8080/api/teacherProfile" role="teacher" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/ongoing-projects/:userId'>
                <TeacherOngoingProjects url="http://localhost:8080/api/teacherOngoing" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/create-project'>
                <TeacherCreateProject url="http://localhost:8080/api/addNewProject" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/ongoing-projects/project-details/:projectId'>
                <TeacherOngoingProjectDetails 
                  projectDetailsUrl="http://localhost:8080/api/teacherProjectDetails" 
                  updateDeadlineUrl="http://localhost:8080/api/updateDeadline"
                  closeProjectUrl="http://localhost:8080/api/closeProject">
                </TeacherOngoingProjectDetails>
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/upload-students'>
                <UploadStudents uploadUrl="http://localhost:8080/api/uploadStudent"/>
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/upload-teachers'>
                <UploadTeachers uploadUrl="http://localhost:8080/api/uploadTeacher"/>
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/existing-students'>
                <ExistingStudents fetchUrl="http://localhost:8080/api/students" downloadUrl="http://localhost:8080/api/student/download/students.csv" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/admin/existing-teachers'>
                <ExistingTeachers fetchUrl="http://localhost:8080/api/teacher" downloadUrl="http://localhost:8080/api/teacher/download/teachers.csv" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/student/change-password/:userId'>
                <ChangePasswordForm role="student" url="http://localhost:8080/auth/changePassword" />
              </ProtectedRoute>
              <ProtectedRoute exact path='/teacher/change-password/:userId'>
                <ChangePasswordForm role="teacher" url="http://localhost:8080/auth/changePassword" />
              </ProtectedRoute>
              <Route path="*" component={ResourceNotFound}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </LoginProvider>
    </Router>
  );
}

export default App;