import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './employee.css';

export default function Employee(){

    const [employee, setEmployee] = useState([]);
    const emplistStyle = {
        height: '770px', 
        overflowY: 'scroll', 
      };
    useEffect((props) => {
        fetch('http://localhost:5000/employees')
          .then(response => response.json())
          .then(data => {setEmployee(data) 
          });
      },[]);
    return (
    <div className='container-fluid'>
            <h1>EMPLOYEES</h1>
            <br/>
            <ul>
            <div style={emplistStyle}>
            {employee.map((data) => (
            <p key={data.id}>
              <br />
              <NavLink
                to={`/employees/${data.id}`}
                className="navbar-brand"
                activeClassName="selected"
                exact
                id='name'
              >
                {data.firstname} {data.lastname}
              </NavLink>
            </p>
))}
              </div>
              </ul>
              </div>
            
    )
}