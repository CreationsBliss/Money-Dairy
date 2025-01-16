import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa6";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineSettingsInputComponent,
} from "react-icons/md";

const TrackIncome = ({
  incomes,
  onEditIncome,
  onDeleteIncome,
  onHandleSortAscendingIncome,
  onHandleSortDescendingIncome,
}) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsOpen1(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
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
            <div className="relative inline-block" ref={dropdownRef1}>
              <BiSortAlt2 color="black" size={18} onClick={toggleDropdown1} />

              {isOpen1 && (
                <div className="absolute right-0 md:left-0 mt-2 w-32 sm:w-40 bg-[#1D232A] border dark:border-gray-600 rounded-lg shadow-lg z-10 transform transition-all duration-300 ease-in-out">
                  <ul className="py-2">
                    <li
                      className="px-4 py-1 hover:bg-gray-800 cursor-pointer"
                      onClick={onHandleSortAscendingIncome}
                    >
                      Low to High
                    </li>
                    <li
                      className="px-4 py-1 hover:bg-gray-800 cursor-pointer"
                      onClick={onHandleSortDescendingIncome}
                    >
                      High to Low
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white p-1 flex justify-center items-center cursor-pointer border rounded-md dark:border-gray-600 hover:bg-gray-300">
            <div className="relative inline-block" ref={dropdownRef2}>
              <MdOutlineSettingsInputComponent
                color="black"
                size={18}
                onClick={toggleDropdown2}
              />

              {isOpen2 && (
                <div className="absolute right-0 mt-2 w-56 sm:w-72 bg-[#1D232A] border dark:border-gray-600 rounded-lg shadow-lg z-10 transform transition-all duration-300 ease-in-out">
                  <form className="py-2 grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox w-4 h-4 text-gray-100 rounded-md border-gray-300 focus:ring-offset-2 checked:bg-gray-800"
                      />
                      <span className="ml-2">Salary</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox w-4 h-4 text-gray-100 rounded-md border-gray-300 focus:ring-offset-2 checked:bg-gray-800"
                      />
                      <span className="ml-2">Outsourcing</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox w-4 h-4 text-gray-100 rounded-md border-gray-300 focus:ring-offset-2 checked:bg-gray-800"
                      />
                      <span className="ml-2">Bond</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox w-4 h-4 text-gray-100 rounded-md border-gray-300 focus:ring-offset-2 checked:bg-gray-800"
                      />
                      <span className="ml-2">Dividend</span>
                    </label>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        {incomes.map((income) => (
          <div
            key={income.id}
            className="flex justify-between items-center mx-4 pb-2 pt-2 border-b last:border-b-0 dark:border-gray-600 group"
          >
            <div>
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl">
                {income.category}
              </h1>
              <p className="text-[12px]">
                {moment(income.date).format("D MMMM YYYY")}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-800 dark:text-white lg:text-xl translate-x-10 transition-all group-hover:-translate-x-3">
                {income.amount}
              </span>
              <span className="space-x-1 flex translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
                <MdModeEdit
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  size={18}
                  onClick={() => onEditIncome(income)}
                />
                <MdDelete
                  className="cursor-pointer hover:text-red-500 transition-colors duration-300"
                  size={18}
                  onClick={() => onDeleteIncome(income)}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackIncome;
