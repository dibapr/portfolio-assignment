import { Link } from "react-router-dom";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="https://linkedin.com/in/dibapr" target="_blank">
        <i className="bi bi-linkedin"></i>
      </Link>
      <Link to="https://github.com/dibapr" target="_blank">
        <i className="bi bi-github"></i>
      </Link>
    </div>
  );
};

export default Socials;
