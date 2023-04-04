import { Stack, Image } from "react-bootstrap";
import styles from "./Root.module.css";
import userImage from "../../assets/dazai.jpg";
import { NavLink } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <nav className={styles.container}>
          <Image
            className={styles.img}
            width="130px"
            src={userImage}
            fluid="true"
          />
          <Stack gap="3">
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/"
              end>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/about">
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/experience">
              Experience
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/skills">
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/interest">
              Interest
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/awards">
              Awards
            </NavLink>
          </Stack>
        </nav>
      </header>
    </>
  );
};

export default Root;
