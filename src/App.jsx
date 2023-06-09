import Navbar from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Workouts from './pages/Workouts';
import Favorite from './pages/Favorite';
import Register from './pages/Register';
import Login from './pages/Login';
import Calorie from './pages/Calorie';
import MyWorkouts from './pages/MyWorkouts';
import WorkoutDetails from './pages/WorkoutDetails';
import Settings from './pages/Settings';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/workouts' element={<Workouts/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
            <Route path='/calorie' element={<Calorie/>}/>
            <Route path='/myworkouts' element={<MyWorkouts/>}/>
            <Route path='/workout/:id' element={<WorkoutDetails/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
