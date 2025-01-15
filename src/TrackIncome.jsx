import { BiSortAlt2 } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa6";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineSettingsInputComponent,
} from "react-icons/md";

const TrackIncome = () => {
  return (
    <div className="w-full md:w-1/2 border rounded-md dark:border-gray-600">
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-md">
        <div className="flex space-x-2">
          <div className="bg-blue-500 p-2 flex justify-center items-center rounded-md">
            <FaMoneyCheck color="white" size={20} />
          </div>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white lg:text-2xl">
            Income
          </h1>
        </div>
        <div className="flex space-x-1">
          <div className="bg-white p-1 flex justify-center items-center cursor-pointer border rounded-md dark:border-gray-600 hover:bg-gray-300">
            <BiSortAlt2 color="black" size={18} />
          </div>
          <div className="bg-white p-1 flex justify-center items-center cursor-pointer border rounded-md dark:border-gray-600 hover:bg-gray-300">
            <MdOutlineSettingsInputComponent color="black" size={18} />
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="flex justify-between items-center mx-4 pb-2 pt-2 border-b last:border-b-0 dark:border-gray-600 group">
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl">
              Salary
            </h1>
            <p className="text-[12px]">15 January 2024</p>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl translate-x-10 transition-all group-hover:-translate-x-3">
              BDT 1000
            </span>
            <span className="space-x-1 flex translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
              <MdModeEdit
                className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                size={18}
              />
              <MdDelete
                className="cursor-pointer hover:text-red-500 transition-colors duration-300"
                size={18}
              />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mx-4 pb-2 pt-2 border-b last:border-b-0 dark:border-gray-600 group">
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl">
              Salary
            </h1>
            <p className="text-[12px]">15 January 2024</p>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl translate-x-10 transition-all group-hover:-translate-x-3">
              BDT 1000
            </span>
            <span className="space-x-1 flex translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
              <MdModeEdit
                className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                size={18}
              />
              <MdDelete
                className="cursor-pointer hover:text-red-500 transition-colors duration-300"
                size={18}
              />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mx-4 pb-2 pt-2 border-b last:border-b-0 dark:border-gray-600 group">
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl">
              Health
            </h1>
            <p className="text-[12px]">15 January 2024</p>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl translate-x-10 transition-all group-hover:-translate-x-3">
              BDT 1000
            </span>
            <span className="space-x-1 flex translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
              <MdModeEdit
                className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                size={18}
              />
              <MdDelete
                className="cursor-pointer hover:text-red-500 transition-colors duration-300"
                size={18}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackIncome;
