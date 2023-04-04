import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../components/Heading";
import styles from "./SkillsList.module.css";

const SkillsList = () => {
  return (
    <>
      <Heading text="Skills" />
      <Container className={styles.container}>
        <Row>
          <div className={styles.flex}>
            <Col className={styles.col}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-braces"
                viewBox="0 0 16 16">
                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
              </svg>
              Coding
            </Col>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Chakra UI</li>
              <li>VB.NET</li>
            </ul>
          </div>
        </Row>
        <Row>
          <div className={styles.flex}>
            <Col className={styles.col}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-brush-fill"
                viewBox="0 0 16 16">
                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
              </svg>
              Graphic Design
            </Col>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
            </ul>
          </div>
        </Row>
        <Row>
          <div className={styles.flex}>
            <Col className={styles.col}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-film"
                viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
              </svg>
              Video Editing
            </Col>
            <ul>
              <li>Adobe Premiere Pro</li>
              <li>Adobe After Effects</li>
            </ul>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SkillsList;
