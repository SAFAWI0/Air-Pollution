import { useState } from "react";
import Container from "../Container/container";
import { SearchOutlined } from "@ant-design/icons";

export const Card = () => {
  const [value, setValue] = useState();
  const [search, setSearch] = useState("");

  const currentItems = [
    { id: 1, no: "A123", user_id: "U001", status: "Pending" },
    { id: 2, no: "B456", user_id: "U002", status: "Shipped" },
    { id: 3, no: "C789", user_id: "U003", status: "Delivered" },
  ];

  const handleInputChange = () => {
    setSearch(value);
  };
  return (
    <div className="card">
      <Container>
        <div className="flex items-center justify-between my-12 w-1/2 mx-auto">
          <div className="flex flex-col items-center bg-gray-600  py-8 px-12 text-white shadow-xl space-y-4 rounded-lg">
            <span>Caz</span>
            <p className="text-xl">100%</p>
          </div>
          <div className="flex flex-col items-center bg-gray-600 py-8 px-12 text-white shadow-xl space-y-4 rounded-lg">
            <span className="">Dustcm</span>
            <p className="text-xl">100%</p>
          </div>
          <div className="flex flex-col items-center bg-gray-600 py-8 px-12 text-white shadow-xl space-y-4 rounded-lg">
            <span>Temp</span>
            <p className="text-xl">100%</p>
          </div>
        </div>
        <div className=" w-1/3 mx-auto bg-red-500 text-center py-4 rounded-lg shadow-xl">
          <p className="text-white ">Air Quality Status</p>
          <p className="text-xl bold text-white">100%</p>
        </div>

        <hr className="my-12" />

        <div className="flex justify-center items-center ">
          <div className="search-box flex border border-white bg-gray-600 rounded-lg overflow-hidden items-center h-9 w-64">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="ابحث عن المنطقة"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(value);
                }
              }}
              className="outline-none border-none w-full bg-gray-600 text-lg text-end pr-2 text-white placeholder-white"
            />
            <button
              onClick={handleInputChange}
              className="border-none bg-transparent cursor-pointer px-2"
            >
              <SearchOutlined className="text-lg text-white" />
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Dustcm
                </th>
                <th scope="col" className="px-6 py-3">
                  Temp
                </th>
                <th scope="col" className="px-8 py-3">
                  Cazs
                </th>
                <th scope="col" className="px-8 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.no}</td>
                  <td className="px-6 py-4">{item.user_id}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="select-container">
          <select>
            <option value="option1"> Baghdad </option>
            <option value="option2">Baghdad</option>
            <option value="option3">Baghdad</option>
          </select>
        </div>
      </Container>
    </div>
  );
};
