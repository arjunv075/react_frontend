import './App.css';
import Home from './components/home/home'
import Employee from './components/employee/employee';
import About from './components/about/about'
import Header from './components/header/header'
import EmployeeDetails from './components/employeedetails/employeedetails';
import LeaveForm from './components/leaves/leaves';
import Error from './components/error/error';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/error" element = {<Error />}/>
        <Route path="/employees" element={<Employee />}/>
        <Route path="/employees/:id" element={<EmployeeDetails />}>
          <Route path="leave" element={<LeaveForm />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
