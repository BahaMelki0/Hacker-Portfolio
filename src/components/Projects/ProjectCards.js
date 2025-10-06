import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
  imgStyle,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={`${title} preview`}
        style={imgStyle}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        {ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title} on GitHub`}
          >
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: ghLink ? "10px" : 0 }}
            aria-label={`Open the ${title} demo`}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
