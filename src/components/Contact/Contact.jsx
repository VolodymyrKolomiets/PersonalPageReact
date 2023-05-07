import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const initialValue = {
    name: "",
    lastName: "",
    email: "",
    birthdate: "",
  };
  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

 const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (
      data.name.length + 1 < 3 ||
      data.lastName.length + 1 < 3 ||
      data.birthdate.length === 0
    ) {
      setMessage("Name, Last Name, and Birthdate are required");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      birthdate: data.birthdate,
    };
    let userList = [];
    try {
      const existingUsers = localStorage.getItem("userList");
      if (existingUsers) {
        userList = JSON.parse(existingUsers);
      }
    } catch (error) {
      console.log("Error loading user list from local storage:", error);
    }
  
    // Verificar si el usuario ya existe en la lista
    const existingUser = userList.find(user => user.email === userInfo.email);
    if (existingUser) {
      alert('Este usuario ya existe en la lista');
      return;
    }
  
    userList.push(userInfo);
    localStorage.setItem("userList", JSON.stringify(userList));
    console.log(`Welcome ${data.name} ${data.lastName}! Your birthdate is ${data.birthdate}.`);
    setData(initialValue);
    navigate("/");
  }

  return (
    <div className="container-form">
      <div className="form-container">
        <h1 className="text-form">Form</h1>
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={handleInputChange}
              name="name"
              value={data.name}
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              onChange={handleInputChange}
              name="lastName"
              value={data.lastName}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
              name="email"
              value={data.email}
            />
          </div>
          <div className="input-container">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="date"
              onChange={handleInputChange}
              name="birthdate"
              value={data.birthdate}
            />
          </div>
          <button type="submit" className="submit-btn" disabled={btnDisabled}>
            Submit
          </button>
        </form>
        {message && <span className="alert-message">{message}</span>}
      </div>
    </div>
  );
};

export default UserForm;
