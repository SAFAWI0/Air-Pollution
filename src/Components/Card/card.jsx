import { useState } from "react";
import Container from "../Container/container";
import { SearchOutlined } from "@ant-design/icons";
import { Items, sensorData } from "../../../fake";

export const Card = () => {
  const [value, setValue] = useState();
  const [search, setSearch] = useState("");

  const handleInputChange = () => {
    setSearch(value);
  };
  return (
    <div className="card">
      <Container>
        <div className="flex items-center justify-between my-12 w-1/2 mx-auto">
          {Items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-600 py-6 px-8 text-white shadow-xl space-y-4 rounded-lg mx-4"
            >
              <span className="text-lg">{item.name}</span>
              <div className="flex items-center">
                <p className="text-2xl font-bold mr-2">{item.value}</p>
                <span className="text-sm">{item.symbol}</span>
              </div>
              <span className="text-xs">{item.water_percentage}</span>
            </div>
          ))}
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
              {sensorData.map((item, i) => (
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
                  <td className="px-6 py-4">{item.city}</td>
                  <td className="px-6 py-4">{item.dustcm} µg/m³</td>
                  <td className="px-6 py-4">{item.temp} °C</td>
                  <td className="px-6 py-4">{item.caz} ppm</td>
                  <td className="px-6 py-4">{item.action}</td>
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
