import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ children, role, ...props }) => {
  return (
    role === "navigation" ?
      <Link className="button" {...props}>{children}</Link>
      :
      <button type="button" className="button" title="button" {...props} >{children}</button>

  );
};

export default Button;
