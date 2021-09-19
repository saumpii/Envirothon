
import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("../../assets/img/a.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("../../assets/img/c.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("../../assets/img/b.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img
        alt="..."
        className="path"
        src={require("../../assets/img/path5.png").default}
      />
      <img
        alt="..."
        className="path path1"
        src={require("../../assets/img/path5.png").default}
      />
      <Container>
       
        <Row id="modals">
          <Col></Col>
          <Col md="4">
          <h3 className="title mb-5">Join Our Team</h3>
            <Button color="primary" onClick={() => setDemoModal(true)}>
              Click Here
            </Button>
          </Col>
          <Col></Col>
          {/* Sart Demo Modal */}
          <Modal isOpen={demoModal} toggle={() => setDemoModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Join In</h4>
            </div>
            <div className="modal-body">
              <p>
              We are trying to estabilish a community for Growth and Nature Care. We offer Everyone leadership positions, There are many clubs you can join in and network,
               We will try implementing technical projects made across the globe by other students. Augmented Reality is Amazing and it wil connect us all. Overall it will be a journey worth it.
               Join in FAFA.
              </p>
            </div>
            <div className="modal-footer">
              <Button color="default" type="button" href="https://forms.gle/NYG8U8HoxttGKRrf8">
                Fill Form
              </Button>
              <Button
                color="danger"
                type="button"
                onClick={() => setDemoModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
        </Row>
        <br />
        <br />
        
      </Container>
      <div className="section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                More About Us
              </h1>
              <p className="text-white mt-4">
               We are trying to estabilish a community for Growth and Nature Care. We offer Everyone leadership positions, There are many clubs you can join in and network,
               We will try implementing technical projects made across the globe by other students. Augmented Reality is Amazing and it wil connect us all. Overall it will be a journey worth it.
               Join in FAFA.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://docs.google.com/document/d/17PV9P65PqQz3VDL8Lth-QjFwRFi5ZrRb5PrbMADDYcw/edit?usp=sharing"
              >
               Documentation To Know More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
