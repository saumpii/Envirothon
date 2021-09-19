
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter" style={{background: "#39FF14"}} >
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container >
        <div className="content-center brand"  >
          <h1 className="h1-seo" style={{color: "black"}} >EEto</h1>
          <h3 className="d-none d-sm-block"style={{color: "black"}} >
          estabilish a community of enlightened youth through education and awareness about technology and environmentalism.
          </h3>
        </div>
      </Container>
    </div>
  );
}
