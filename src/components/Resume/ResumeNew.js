import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Melki_Bahaeddine.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const zoomIn = () => setScale((prevScale) => prevScale + 0.2);
  const zoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.2, 0.6));
  const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const prevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </Row>

      <div className="pdf-controls">
        <button onClick={prevPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
