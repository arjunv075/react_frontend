import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Employee from '../employee/employee';
import Leaves from '../leaves/leaves';


export default function EmployeeDetails() {
  const { id } = useParams();
  const [employeedetails, setEmployeedetails] = useState([]);
  const [updateEmployeeDetails, setUpdateEmployeeDetails] = useState(false);


  const emplistStyle = {
    height: '750px',
    overflowY: 'scroll',
  };

  useEffect(() => {
    fetch(`http://localhost:5000/employees/${id}`)
      .then(response => response.json())
      .then(dataemp => {
        setEmployeedetails(dataemp);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id,updateEmployeeDetails]);

  const handleUpdateEmployeeDetails = () => {
    setUpdateEmployeeDetails(prevState => !prevState);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3">
          <Employee />
        </div>
        <div className="col-md-9">
          {employeedetails.map(dataemp => (
            <div key={dataemp.employeeId} style={{ backgroundColor: '#5d5d5' }}>
              <div className="card-body">
                <h1 className="card-title">{dataemp.firstname} {dataemp.lastname}</h1>
                <table className="table table-bordered" style={{ borderColor: '#333' }}>
                  <tbody>
                    <tr>
                      <td><strong>Email:</strong></td>
                      <td>{dataemp.email}</td>
                    </tr>
                    <tr>
                      <td><strong>Phone number:</strong></td>
                      <td>{dataemp.phone}</td>
                    </tr>
                    <tr>
                      <td><strong>Title:</strong></td>
                      <td>{dataemp.title}</td>
                    </tr>
                    <tr>
                      <td><strong>Leaves taken:</strong></td>
                      <td>{dataemp.leaves}</td>
                    </tr>
                    <tr>
                      <td><strong>Maximum leaves:</strong></td>
                      <td>{dataemp.max_leaves}</td>
                    </tr>
                  </tbody>
                </table>

                <Leaves onLeaveSubmit={handleUpdateEmployeeDetails} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}