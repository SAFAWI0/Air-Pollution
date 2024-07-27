import  { useEffect, useState } from "react";
import Container from "../Container/container";
import { Items, finalScores } from "../../../fake"; // استخدام Items فقط من الملف المزيف
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { A } from "./a";

export const Card = () => {
  const [cities, setCities] = useState([]);
  const [read, setRead] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState(null);

  const getData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("https://localhost:7090/api/City/GetAllCities", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Cities fetched:", result); // عرض البيانات في وحدة التحكم للتحقق
        setCities(result);
      })
      .catch((error) => console.error("Error fetching cities:", error));
  };

  const getRead = async (cityId) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(`https://localhost:7090/api/Read/GetReadsByCityId?cityId=${cityId}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Readings fetched:", result); 
        setRead(result);
      })
      .catch((error) => console.error("Error fetching readings:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (selectedCityId) {
      getRead(selectedCityId);
    }
  }, [selectedCityId]);

  const handleCityChange = (event) => {
    const cityId = event.target.value;
    setSelectedCityId(cityId);
  };

  return (
    <div className="mt-20">
      <Container>
        <div className="flex justify-center gap-8">
          {Items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-600 py-8 px-8 text-white shadow-xl space-y-4 rounded-lg w-40 mb-8"
            >
              <span className="text-lg">{item.name}</span>
              <div className="flex items-center">
                <p className="text-2xl font-bold mr-2">{item.value}</p>
                <span className="text-sm">{item.symbol}</span>
              </div>
              <img src={item.img} alt={item.name} className="mt-6" />
            </div>
          ))}
        </div>

        <div className="w-1/3 mx-auto bg-red-500 text-center py-4 rounded-lg shadow-xl">
          <p className="text-white">Air Quality Status</p>
          <p className="text-xl font-bold text-white">100%</p>
        </div>

        <hr className="my-12" />

        <div className="flex justify-center items-center gap-20">
          <div className="select-container mb-4">
            <select
              className="w-full border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              onChange={handleCityChange}
            >
              <option value="non">Select a City</option>
              {cities.map((city, index) => (
                <option key={index} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* جدول */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Dustcm
                </th>
                <th scope="col" className="px-6 py-3">
                  Temp
                </th>
                <th scope="col" className="px-6 py-3">
                  Cazs
                </th>
                <th scope="col" className="px-6 py-3">
                  Quality
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {read.map((item, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4 dark:text-white">
                    {item.dcm} µg/m³
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {item.tempDeg} °C
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {item.gazPercentage} ppm
                  </td>
                  <td className="px-6 py-4 dark:text-white">{item.quality}</td>
                  <td className="px-6 py-4 dark:text-white">
                    {item.quality < 50
                      ? "Air Quality Status Poor"
                      : item.quality < 100
                      ? "Air Quality Status Moderate"
                      : item.quality === 100
                      ? "Air Quality Status Excellent"
                      : "Unknown Air Quality Status"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="chart">
          <div className="flex justify-center items-center mt-14">
            <p className="text-lg text-gray-800 mb-8">
              <span className="text-black shadow-black">
                مخطط بياني يوضح تفاصيل دقيقة للتلوث الهواء
              </span>
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 rounded-lg">
            <div className="w-full overflow-auto flex flex-col items-center">
              <LineChart
                width={700}
                height={350}
                data={finalScores}
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
              >
                <Line type="monotone" dataKey="value" stroke="#3366CC" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="dayNum" />
                <YAxis domain={[0, 300]} />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        </div>
        <A/>
      </Container>
    </div>
  );
};
