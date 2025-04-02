import { Candidate } from "../types";

interface CandidateTableProps {
  candidates: Candidate[];
  onEdit: (candidate: Candidate) => void;
  onDelete: (id: number) => void;
}

const CandidateTable: React.FC<CandidateTableProps> = ({
  candidates,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-[grey] font-sans tracking-[0.05rem] mt-2">
          Candidate Table
        </h2>
      </div>
      <table className="w-full border-collapse border border-gray-300 mt-3">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 rounded-md p-2">Name</th>
            <th className="border border-gray-300 rounded-md p-2 hidden sm:table-cell">
              Email
            </th>
            <th className="border border-gray-300 rounded-md p-2 hidden md:table-cell">
              Phone
            </th>
            <th className="border border-gray-300 rounded-md p-2">Skills</th>
            <th className="border border-gray-300 rounded-md p-2 hidden lg:table-cell">
              Experience
            </th>
            <th className="border border-gray-300 rounded-md p-2">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {candidates.map((candidate) => (
            <tr
              key={candidate.id}
              className="border hover:bg-gray-100 transition ease-in-out">
              <td className="border border-gray-300 rounded-md p-2 text-center">
                {candidate.name}
              </td>
              <td className="border border-gray-300 rounded-md p-2 text-center hidden sm:table-cell">
                {candidate.email}
              </td>
              <td className="border border-gray-300 rounded-md p-2 text-center hidden md:table-cell">
                {candidate.phone}
              </td>
              <td className="border border-gray-300 rounded-md p-2 text-center">
                {candidate.skills.join(", ")}
              </td>
              <td className="border border-gray-300 rounded-md p-2 text-center hidden lg:table-cell">
                {candidate.experience} years
              </td>
              <td className="border border-gray-300 rounded-md p-2 text-center">
                <button
                  onClick={() => onEdit(candidate)}
                  className="bg-blue-500 cursor-pointer text-white px-2 py-1 rounded hover:bg-blue-600 transition ease-in-out">
                  Edit
                </button>
                <button
                  onClick={() => onDelete(candidate.id)}
                  className="bg-red-500 cursor-pointer text-white px-2 py-1 ml-2 rounded hover:bg-red-600 transition ease-in-out">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CandidateTable;
