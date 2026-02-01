"use client";
import { useState, useEffect } from "react";
import { getUser } from "../../utils/fakeAuth";

export default function ProfilePage() {
  const user = getUser(); // login helper
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    dob: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  // Load profile from localStorage
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`profile_${user.email}`);
      if (saved) setProfile(JSON.parse(saved));
    }
  }, [user]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setProfile((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    if (user) {
      localStorage.setItem(`profile_${user.email}`, JSON.stringify(profile));
      alert("Profile saved!");
    }
  };

  if (!user) return <p className="p-6 text-red-500">Login required!</p>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      {/* Profile Image */}
      <div className="mb-4">
        <img
          src={preview || profile.image || "/default-avatar.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-purple-300 shadow-lg object-cover"
        />
      </div>

      <input type="file" onChange={handleImage} className="mb-4" />

      {/* Profile Form */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4">
        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Name"
          className="input w-full"
        />
        <input
          name="age"
          value={profile.age}
          onChange={handleChange}
          placeholder="Age"
          type="number"
          className="input w-full"
        />
        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          className="input w-full"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          name="dob"
          value={profile.dob}
          onChange={handleChange}
          type="date"
          className="input w-full"
        />

        <button onClick={handleSave} className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500">
          Save Profile
        </button>
      </div>
    </div>
  );
}
