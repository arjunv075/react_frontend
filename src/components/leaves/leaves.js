import React,{useState} from "react";
import { useParams } from 'react-router-dom';


const LeaveForm = ({ onLeaveSubmit }) => {
    const { id } = useParams();
    const [leaveData, setLeaveData] = useState({date: '',reason: '',});
    console.log(id)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLeaveData({...leaveData, [name]: value });
      };

      const handleSubmit = async (e) => {
      e.preventDefault();

      if (!leaveData.reason.trim())
       {
        window.alert('Please enter a reason for leave.');
        return;
      }
    
       try
        {
         {
          const response = await fetch(`http://localhost:5000/leave/${id}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(leaveData),
          });

          if (response.ok) {
            console.log("Leave posted");
            onLeaveSubmit();
            setLeaveData({ date: '', reason: '' });
            window.alert('Leave posted');
          } else {
            console.error("Error posting leave");
            window.alert("Error posting leave: check the selected date");

        }
     }
    }catch (error) {
      console.error("Network error:", error.message);
      window.alert(`Error: ${error.message}`);
    }

  };
  return (
    <center>
      <div>
      <form onSubmit={handleSubmit}>
    <table>
      <br/>
      <tr>
           <td></td><td><h1>Leave submission form</h1></td>
            </tr>
            <tr>
                <th>Leave date</th>
                <td><input
                    type="date"
                     name="date"
                    value={leaveData.date}  
                  onChange={handleInputChange}
                  style={{ backgroundColor: 'lightgrey', color: 'black' }}
                  /></td>
            </tr>
            <tr>
                <th>Reason</th>
                <td><textarea
                    name="reason"
                    value={leaveData.reason}
                    onChange={handleInputChange}
                    style={{ backgroundColor: 'lightgrey', color: 'black' }}
                  ></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td> <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
                  Submit Leave
                </button></td>
            </tr>
    </table>
    </form>
    </div>
</center>
  );
};

export default LeaveForm;