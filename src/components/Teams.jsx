import {
  membersData2021,
  membersData2022,
  membersData2023,
  membersData2024,
  membersData2025,
  membersData2026,
} from "../../public/members_data";
import Batch from "./Batch";

const Teams = () => {
  const allBatches = [
    membersData2026,
    membersData2025,
    membersData2024,
    membersData2023,
    membersData2022,
    membersData2021,
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col items-center py-10">
        <div className="relative">
          <img
            src="images/staff/dr_sangeetha1.jpg"
            alt="Dr. Sangeetha"
            className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <p className="mt-4 text-xl font-semibold text-center">
            Dr. Sangeetha
          </p>
          <p className="mt-1 text-center">
          Staff Advisor
          </p>

        </div>
      </div>
      <div className="w-[min(1200px,100%)] mx-auto p-10 flex flex-col justify-center items-center">
        {allBatches.map((batch, index) => (
          <Batch
            key={index}
            year={`BATCH ${2026 - index}`}
            membersData={batch}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
