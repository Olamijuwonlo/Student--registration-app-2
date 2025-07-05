import { useState } from "react";
import axios from "axios";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    matricNumber: "",
    gender: "",
    age: "",
    department: "",
    level: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("name", formData.name);
  data.append("matricNumber", formData.matricNumber);
  data.append("gender", formData.gender);
  data.append("age", formData.age);
  data.append("department", formData.department);
  data.append("level", formData.level);
  data.append("photo", formData.photo);

  try {
    const response = await axios.post("http://localhost:5000/api/students", data);
    alert("Student registered successfully!");
    console.log(response.data);

    //  Reset the form here
    setFormData({
      name: "",
      matricNumber: "",
      gender: "",
      age: "",
      department: "",
      level: "",
      photo: null,
    });

    // Optional: Reset file input manually if needed
    document.querySelector('input[name="photo"]').value = "";

  } catch (err) {
    console.error("Submission error:", err);
    alert("Something went wrong.");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Student Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter full name"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Matric Number</label>
            <input
              type="text"
              name="matricNumber"
              value={formData.matricNumber}
              onChange={handleChange}
              required
              placeholder="Enter matric number"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Age</label>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Age</option>
              {Array.from({ length: 35 }, (_, i) => i + 15).map((age) => (
                <option key={age}>{age}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Department</option>
              <option>Computer Science</option>
              <option>Mass Communication</option>
              <option>Business Admin</option>
              <option>Economics</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Level</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Level</option>
              <option>100</option>
              <option>200</option>
              <option>300</option>
              <option>400</option>
              <option>500</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Passport Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}