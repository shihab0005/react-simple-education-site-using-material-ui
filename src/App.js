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
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/course/:courseId'>
            <CourseDetails></CourseDetails>
          </Route>
          <Route path='/instructor'>
            <Instractor></Instractor>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
