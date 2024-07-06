import "./header.css";
import Container from "../Container/container";
import img from "../../assets/pic.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header bg-gray-600">
      <Container>
        <div className="content flex items-center justify-between p-2">
          <div className="title flex items-center">
            <img src={img} alt="Air Pollution" className="w-12 h-12 rounded" />
            <h2 className="text-xl font-bold text-white p-2 rounded mr-4">
              Air Pollution
            </h2>
          </div>
          <div className="nav flex items-center">
            <Link to="/" className="text-white mx-2 hover:text-blue-200">Home</Link>
            <Link to="/" className="text-white mx-2 hover:text-blue-200">About</Link>
            <Link to="/" className="text-white mx-2 hover:text-blue-200">Contacts</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
