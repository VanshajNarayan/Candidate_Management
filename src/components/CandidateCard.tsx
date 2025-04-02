import { Candidate } from "../types";

interface CandidateCardProps {
  candidate: Candidate;
  onEdit: (candidate: Candidate) => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onEdit }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-md bg-white">
      <h3 className="font-bold">{candidate.name}</h3>
      <p>{candidate.email}</p>
      <p>{candidate.phone}</p>
      <p>
        <strong>Skills:</strong> {candidate.skills.join(", ")}
      </p>
      <p>
        <strong>Experience:</strong> {candidate.experience} years
      </p>
      <button
        onClick={() => onEdit(candidate)}
        className="bg-blue-500 cursor-pointer text-white px-4 py-1 mt-2 rounded">
        Edit
      </button>
    </div>
  );
};

export default CandidateCard;
