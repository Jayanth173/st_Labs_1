import React, { useState } from "react";

const ProfileForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    affectedSide: "",
    condition: "",
    speciality: "",
    medicalHistory: "",
    goalReached: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="affectedSide"
        placeholder="Affected Side"
        value={formData.affectedSide}
        onChange={handleChange}
      />
      <input
        type="text"
        name="condition"
        placeholder="Condition"
        value={formData.condition}
        onChange={handleChange}
      />
      <input
        type="text"
        name="speciality"
        placeholder="Speciality"
        value={formData.speciality}
        onChange={handleChange}
      />
      <input
        type="text"
        name="medicalHistory"
        placeholder="Medical History"
        value={formData.medicalHistory}
        onChange={handleChange}
      />
      <input
        type="number"
        name="goalReached"
        placeholder="Goal Reached"
        value={formData.goalReached}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
