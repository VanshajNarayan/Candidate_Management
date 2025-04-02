import { useState } from "react";
import { Candidate } from "../types";

interface CandidateFormProps {
  candidate: Candidate | null;
  onSave: (candidate: Candidate) => void;
  onCancel: () => void;
}

const CandidateForm: React.FC<CandidateFormProps> = ({
  candidate,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Candidate>(
    candidate || {
      id: Date.now(),
      name: "",
      email: "",
      phone: "",
      skills: [],
      experience: 0,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // * Handle skills input (convert comma-separated string to array)
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skillsArray = e.target.value.split(",").map((skill) => skill.trim());
    setFormData({ ...formData, skills: skillsArray });
  };

  // * Handle number input for experience
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, experience: Number(e.target.value) });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 transition-transform z-10">
      <h2 className="text-xl font-bold mb-4 text-[grey] tracking-[0.04rem]">
        {candidate ? "Edit Candidate" : "Add Candidate"}
      </h2>
      {/* Name Input */}
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full border-gray-300 rounded-md"
        placeholder="Name"
        autoComplete="off"
      />
      {/* Email Input */}
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full mt-2 border-gray-300 rounded-md"
        placeholder="Email"
        autoComplete="off"
      />
      {/* Phone Input */}
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 w-full mt-2 border-gray-300 rounded-md"
        placeholder="Phone"
        autoComplete="off"
      />
      {/* Skills Input */}
      <input
        name="skills"
        value={formData.skills.join(", ")}
        onChange={handleSkillsChange}
        className="border p-2 w-full mt-2 border-gray-300 rounded-md"
        placeholder="Skills (comma-separated)"
        autoComplete="off"
      />
      {/* Experience Input */}
      <input
        name="experience"
        type="number"
        value={formData.experience}
        onChange={handleExperienceChange}
        className="border p-2 w-full mt-2 border-gray-300 rounded-md"
        placeholder="Experience (years)"
        autoComplete="off"
      />
      <button
        onClick={handleSave}
        className="bg-green-500 rounded-md text-white px-4 py-1 mt-4">
        Save
      </button>
      <button
        onClick={onCancel}
        className="bg-gray-500 rounded-md text-white px-4 py-1 mt-2 ml-2">
        Cancel
      </button>
    </div>
  );
};

export default CandidateForm;
