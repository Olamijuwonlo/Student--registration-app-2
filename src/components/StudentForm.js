import React, { useState } from "react";
import { motion } from "framer-motion";
import "./StudentForm.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    matricNumber: "",
    department: "",
    level: "",
    gender: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="form-title">Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {[
          {
            type: "text",
            name: "fullName",
            placeholder: "Full Name",
            value: formData.fullName,
          },
          {
            type: "text",
            name: "matricNumber",
            placeholder: "Matric Number",
            value: formData.matricNumber,
          },
        ].map((input, index) => (
          <motion.input
            key={input.name}
            {...input}
            onChange={handleChange}
            required
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 * index }}
          />
        ))}

        <motion.select
          name="department"
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <option value="">Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
        </motion.select>

        <motion.select
          name="level"
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <option value="">Select Level</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
        </motion.select>

        <motion.select
          name="gender"
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </motion.select>

        <motion.input
          type="file"
          name="picture"
          accept="image/*"
          onChange={handleChange}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Register
        </motion.button>
      </form>
    </motion.div>
  );
};

export default StudentForm;