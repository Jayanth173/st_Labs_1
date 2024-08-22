import React, { useState } from "react";
import "./App.css";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import ProfileForm from "./components/ProfileForm/ProfileForm";
import SemiCircularProgressBar from "./components/ViewProfile/ViewProfile";

function App() {
  const [profile, setProfile] = useState(null);

  const handleFormSubmit = (data) => {
    const patientId = "87 20200727153457"; // Generate or fetch from database
    setProfile({ ...data, patientId });
  };

  return (
    <div className="App">
      <ViewProfile/>
    </div>
  );
}

export default App;
