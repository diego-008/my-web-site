import Progress from "../components/Progress";
export default function ProgramSkills() {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <Progress width="75" title="Python" color="success" />
      <Progress width="30" title="Java" color="warning" />
      <Progress width="80" title="Html" color="info" />
      <Progress width="60" title="CSS" color="info" />
      <Progress width="60" title="Rect" color="info" />
      <Progress width="80" title="Bootstrap" color="info" />
      <Progress width="30" title="JavaScript" color="warning" />

    </div>
  );
}
