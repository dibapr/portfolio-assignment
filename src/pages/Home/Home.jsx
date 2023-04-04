import Socials from "../../components/Socials/Socials";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.text}>
      <p>Hello everyone, my name is:</p>
      <h1 className={styles.name}>Dimas Bayu Pratama</h1>
      <h3>Frontend Engineer</h3>
      <Socials />
    </div>
  );
};

export default Home;
