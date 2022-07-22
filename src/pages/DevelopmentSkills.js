import Progress from "../components/Progress";
import {
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faBootstrap,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
export default function ProgramSkills() {
  return (
    <>
      <div className="container mt-auto mb-5">
        <div style={{ marginTop: "130px" }}>
          <p className="text-light h1 text-center">
            Mis hablidades de Desarrollo
          </p>
          <Progress
            width="80"
            title="Html"
            color="info"
            icon={faHtml5}
            colorIcon="#d35400"
          />
          <Progress
            width="50"
            title="CSS"
            color="info"
            icon={faCss3}
            colorIcon="#3498db"
          />
          <Progress
            width="70"
            title="JavaScript"
            color="info"
            icon={faJs}
            colorIcon="#f1c40f"
          />
          <Progress
            width="70"
            title="Python"
            color="info"
            icon={faPython}
            colorIcon="#3498db"
          />
          <Progress
            width="80"
            title="Bootstrap"
            color="info"
            icon={faBootstrap}
            colorIcon="#8e44ad"
          />
          <Progress
            width="60"
            title="React"
            color="info"
            icon={faReact}
            colorIcon="#3498db"
          />
          <Progress
            width="30"
            title="NodeJs"
            color="warning"
            icon={faNode}
            colorIcon="#27ae60"
          />
        </div>
      </div>
    </>
  );
}
