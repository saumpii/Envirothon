
import React from "react";
import Simple from "./IndexSections/Video";
// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import PageHeader from "../components/PageHeader/PageHeader.js";
import Footer from "../components/Footer/Footer.js";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container,Row,Col
} from 'reactstrap';
import Clubs from "./IndexSections/Clubs";
// sections for this page/view

import Notifications from "./IndexSections/Notifications.js";
import JavaScript from "./IndexSections/JavaScript.js";



export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper" >
        <PageHeader />
        <div className="main">
     
          <Notifications />

          <Simple/>
          <Clubs/>
          <JavaScript />
        </div>
        <Footer />
        
      </div>
    </>
  );
}
