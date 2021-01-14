import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {

  const [date, setDate] = useState(new Date());
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: []
  });

  useEffect(() => {
    const testExercise = setExercise({
      username: 'test user',
      users: ['test user']
    })
    return testExercise;
  }, []);

  function updateDate() {
    setExercise((prevValue) => {
      return {
          username: prevValue.username,
          description: prevValue.description,
          duration: prevValue.duration,
          date: date,
          users: prevValue.users
        }
    });
  }

  function updateExercise(e) {
    updateDate();
    setExercise((prevValue) => {
      if(e.target.name === "username") {
        return {
          username: e.target.value,
          description: prevValue.description,
          duration: prevValue.duration,
          date: prevValue.date,
          users: prevValue.users
        }
      } else if(e.target.name === "description") {
        return {
          username: prevValue.username,
          description: e.target.value,
          duration: prevValue.duration,
          date: prevValue.date,
          users: prevValue.users
        }
      } else if (e.target.name === "duration") {
        return {
          username: prevValue.username,
          description: prevValue.description,
          duration: e.target.value,
          date: prevValue.date,
          users: prevValue.users
        }
      }
    });
  }

  // moved out out return and declared it here 
  const userRef = React.createRef("userInput");

  function onSubmit(e) {
    // Prevent the default action on the HTML form
    e.preventDefault();

    console.log(exercise);
    window.location = '/';
  }

  return <div>
    <h3>Create New Exercise Log</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Username: </label>
        <select ref={userRef}
          required
          name="username"
          className="form-control"
          value={exercise.username}
          onChange={updateExercise}>
          {
            exercise.users.map((user) => {
              return <option key={user} value={user}>{user}</option>;
            })
          }
          </select>
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input type="text"
          name="description"
          required
          className="form-control"
          value={exercise.description}
          onChange={updateExercise} />
      </div>
      <div className="form-group">
        <label>Duration (in minutes): </label>
        <input type="text"
          name="duration"
          className="form-control"
          value={exercise.duration}
          onChange={updateExercise} />
      </div>
      <div className="form-group">
        <label>Date: </label>
        <div name="date">
          <DatePicker selected={date} onChange={date => setDate(date)} onCalendarClose={updateDate}
          />
        </div>
      </div>

      <div className="form-group">
        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
      </div>
    </form>
  </div>
}

export default CreateExercise;