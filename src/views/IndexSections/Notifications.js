
import React from "react";
// reactstrap components
import { UncontrolledAlert, Container } from "reactstrap";

export default function Notifications() {
  return (
    <div className="section section-notifications" id="notifications">
      <Container>
        <div className="space" />
        <h3>What We Do !</h3>
        <UncontrolledAlert className="alert-with-icon" color="primary">
          <span data-notify="icon" className="tim-icons icon-coins" />
          <span>
            We Offer Position of Responsibility to our youth members
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="info">
          <span data-notify="icon" className="tim-icons icon-trophy" />
          <span>
            We Have Clubs for different Climate and Environment issues
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="success">
          <span data-notify="icon" className="tim-icons icon-bell-55" />
          <span>
            Learn and Implement Technical Projects from others
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="warning">
          <span data-notify="icon" className="tim-icons icon-bulb-63" />
          <span>
            Learn and Connect to People through Augmented Reality
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="danger">
          <span data-notify="icon" className="tim-icons icon-support-17" />
          <span>
            Get an opportunity to do your duty to Mother Earth
          </span>
        </UncontrolledAlert>
      </Container>
    </div>
  );
}
