import { useState } from "react";
import { Candidate } from "./types";
import CandidateTable from "./components/CandidateTable.tsx";
import CandidateCard from "./components/CandidateCard.tsx";
import CandidateForm from "./components/CandidateForm.tsx";

const initialCandidates: Candidate[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "123-456-7890",
    skills: ["React", "TypeScript"],
    experience: 3,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "987-654-3210",
    skills: ["Vue", "JavaScript"],
    experience: 5,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "555-555-5555",
    skills: ["Angular", "CSS"],
    experience: 4,
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    phone: "222-333-4444",
    skills: ["Python", "Django"],
    experience: 6,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "777-888-9999",
    skills: ["Go", "Rust"],
    experience: 2,
  },
];

function App() {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [isEditing, setIsEditing] = useState(false); // *Track side panel state
  const [editingCandidate, setEditingCandidate] = useState<Candidate | null>(
    null
  ); // *Track selected candidate

  // * Function to add candidate
  const handleAdd = () => {
    setEditingCandidate(null);
    setIsEditing(true);
  };

  // *Function to delete candidate
  const handleDelete = (id: number) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  // *Function to handle edit (to be used later)
  const handleEdit = (candidate: Candidate) => {
    setEditingCandidate(candidate); // Set selected candidate
    setIsEditing(true); // Open form
  };

  // *Function to save candidate (add or update)
  const handleSave = (candidate: Candidate) => {
    if (editingCandidate) {
      // Update existing candidate
      setCandidates(
        candidates.map((c) => (c.id === candidate.id ? candidate : c))
      );
    } else {
      // Add new candidate
      setCandidates([...candidates, { ...candidate, id: Date.now() }]);
    }
    setIsEditing(false);
    setEditingCandidate(null);
  };

  // *Function to close form
  const handleCancel = () => {
    setIsEditing(false);
    setEditingCandidate(null);
  };

  return (
    <>
      <div className="p-4 max-w-[1400px] mx-auto">
        <div className="p-4 text-center">
          <h1 className="text-3xl font-bold text-[grey] font-sans tracking-[0.07rem]">
            Candidate Management
          </h1>
        </div>

        {/* Add Candidate Button */}
        <button
          onClick={handleAdd}
          className="bg-green-500 cursor-pointer text-white px-4 py-2 my-4 rounded">
          + Add Candidate
        </button>

        {/* Candidate Table */}
        <CandidateTable
          candidates={candidates}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Candidate Card */}
        <div>
          <h2 className="text-2xl font-bold text-[grey] font-sans tracking-[0.05rem] mt-6">
            Candidate Cards
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onEdit={handleEdit}
            />
          ))}
        </div>

        {/* Candidate Form */}
        {/* Side Panel Form - Show only if editing */}
        {isEditing && (
          <CandidateForm
            candidate={editingCandidate}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {/* Overlay Background */}
        {isEditing && (
          <div onClick={handleCancel} className="fixed inset-0"></div>
        )}
      </div>
    </>
  );
}

export default App;
