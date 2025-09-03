import photo from "../../assets/Err.webp";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error-wrapper">
      <img src={photo} alt="Error" className="error-img" />
    </div>
  );
};

export default Error;
