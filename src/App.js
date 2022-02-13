import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Instractor from './Components/Instractor/Instractor';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Header/PrivateRoute/PrivateRoute';
import Enroll from './Components/Enroll/Enroll';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <Route exact path='/courses'>
              <Courses></Courses>
            </Route>

            <PrivateRoute exact path='/course/:courseId'>
              <CourseDetails></CourseDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/enrollCourse'>
              <Enroll></Enroll>
            </PrivateRoute>

            <Route exact path='/instructor'>
              <Instractor></Instractor>
            </Route>

            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route path='/*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
