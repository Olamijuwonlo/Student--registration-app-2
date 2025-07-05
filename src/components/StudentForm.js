import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    matricNumber: "",
    gender: "",
    age: "",
    department: "",
    level: "",
    passport: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "passport") {
      setFormData({ ...formData, passport: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Student Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter full name"
            />
          </div>

          {/* Matric Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Matric Number
            </label>
            <input
              type="text"
              name="matricNumber"
              value={formData.matricNumber}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter matric number"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Age
            </label>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Age</option>
              {Array.from({ length: 35 }, (_, i) => i + 15).map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mass Communication">Mass Communication</option>
              <option value="Business Admin">Business Admin</option>
              <option value="Economics">Economics</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Level
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Level</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
              <option value="500">500 Level</option>
            </select>
          </div>

          {/* Passport Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Passport Photograph
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}