import React, { useState, useEffect } from "react";

function CreateUser() {
  const [user, setUser] = useState({
    username: ""
  });

  function updateUser(e) {
    setUser(() => {
      return {
        username: e.target.value
      }
    });
  }

  function onSubmit(e) {
    // Prevent the default action on the HTML form
    e.preventDefault();

    console.log(user);
    
    setUser(() => {
      return {
        username: ""
      }
    });
  }

  return <div>
    <h3>Create New User</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Username: </label>
        <input type="text" required className="form-control" value={user.username} onChange={updateUser} />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary" />
      </div>
    </form>
  </div>
}

export default CreateUser;