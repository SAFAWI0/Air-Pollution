import { useEffect, useState } from "react";

export const A = () => {
  const [cities, setCities] = useState([]);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center gap-20">
        <div className="select-container mb-4">
          <select className="w-full border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:border-blue-500">
            <option value="non">Select a City</option>
            {cities.map((city, index) => (
              <option key={index} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
