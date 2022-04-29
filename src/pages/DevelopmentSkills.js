import Progress from "../components/Progress";
export default function ProgramSkills() {
  return (
    <div className="container mt-auto mb-5 animate__animated animate__backInLeft">
      <div style={{ marginTop: "110px" }}>
        <p className="text-light h1 text-center">Mis hablidades de Desarrollo</p>
        <Progress width="75" title="Python" color="info" />
        <Progress width="30" title="Java" color="warning" />
        <Progress width="80" title="Html" color="info" />
        <Progress width="60" title="CSS" color="info" />
        <Progress width="60" title="Rect" color="info" />
        <Progress width="80" title="Bootstrap" color="info" />
        <Progress width="30" title="JavaScript" color="warning" />
      </div>

    </div>
  );
}
