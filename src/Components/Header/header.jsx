import Container from "../Container/container";
import img from "../../assets/pic.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed inset-0 z-10">
      <div className="header bg-gray-600">
        <Container>
          <div className="content flex items-center justify-between p-1">
            <div className="title flex items-center">
              <img
                src={img}
                alt="Air Pollution"
                className="w-10 h-10 rounded"
              />
              <h2 className="text-xl font-bold text-white p-2 rounded mr-4">
                Air Pollution
              </h2>
            </div>
            <div className="nav flex items-center">
              <Link to="/" className="text-white mx-2 hover:text-blue-200">
                Real Number
              </Link>
              <Link to="/" className="text-white mx-2 hover:text-blue-200">
                Chart
              </Link>
              <Link to="/" className="text-white mx-2 hover:text-blue-200">
                Table
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
