import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github Activity :
      </h1>
      <GitHubCalendar
        username="BahaMelki0"
        blockSize={15}
        blockMargin={5}
        color="#00ff00"
        fontSize={15}
      />
    </Row>
  );
}

export default Github;
