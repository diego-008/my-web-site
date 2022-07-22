import Progress from "../components/Progress";
import {
  faFileWord,
  faPeopleGroup,
  faBrain,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
export default function Skills() {
  return (
    <>
      <div className="container mt-auto mb-5">
        <div style={{ marginTop: "120px" }}>
          <Progress
            width="80"
            title="Office"
            color="info"
            icon={faFileWord}
            colorIcon="#0652DD"
          />
          <Progress
            width="80"
            title="Trabajo en equipo"
            color="info"
            icon={faPeopleGroup}
            colorIcon="#ffbe76"
          />
          <Progress
            width="80"
            title="Resolución de problemas"
            color="info"
            icon={faBrain}
            colorIcon="#ff7979"
          />
          <Progress
            width="25"
            title="Inglés Básico"
            color="warning"
            icon={faLanguage}
            colorIcon="#3498db"
          />
        </div>
      </div>
    </>
  );
}
