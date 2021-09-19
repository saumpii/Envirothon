import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container,Row,Col
  } from 'reactstrap';
import Re from "./re.png";
import gg from "./gg.png"
import tech from "./tech.png"
import aw from "./aw.png"
import ei from "./ei.png"
import ec from "./ec.png"

export default function Clubs(){
 return (
    <Container>
        <br/>
        <h3> Our Clubs</h3>
        <br/>
    <Row>
      <Col>
      <div>
   <Card>
   <CardImg top width="10%" height="10%" src={Re} alt="Card image cap" />
   <CardBody>
   <CardTitle tag="h5">RE Club</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">Focus on Renewable Energy</CardSubtitle>
   <CardText>If you are someone who imagines life with solar panels, Wind Turbines reduce Fossil Fuel usage and loving the growth of renewable energy then this club is all yours</CardText>
   <Button>Button</Button>
   </CardBody>
   </Card>
   </div>
      </Col>
   
      <Col>
      <div>
   <Card>
   <CardImg top width="100%" src={gg} alt="Card image cap" />
   <CardBody>
   <CardTitle tag="h5">Group Green</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">Save trees</CardSubtitle>
   <CardText>if plants are your pets, you love greenary and intake of fresh air. Deforestation and hunting irritates you and would like to have a good ecosystem then u can join in</CardText>
   <Button>Button</Button>
   </CardBody>
   </Card>
   </div>
      </Col>
    </Row>
    <Row>
    <Col>
      <div>
   <Card>
   <CardImg top width="100%" src= {aw} alt="Card image cap" />
   <CardBody>
   <CardTitle tag="h5">Augment World</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">Augmented Reality Based</CardSubtitle>
   <CardText>If you are a fan of AR, and would like to have your AR videos around the globe. Make some creative solution with AR. Don't Wait just Join in</CardText>
   <Button>Button</Button>
   </CardBody>
   </Card>
   </div>
      </Col>
   
      <Col>
      <div>
   <Card>
   <CardImg top width="100%" src={tech} alt="Card image cap" />
   <CardBody>
   <CardTitle tag="h5">Techie Go</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">Build Technical Solutions</CardSubtitle>
   <CardText>If you like arduino or software development, AI or ML and using these skills you want to help mother Earth, this club needs you. </CardText>
   <Button>Button</Button>
   </CardBody>
   </Card>
   </div>
      </Col>
    </Row>
    <Row>
    <Col>
      <div>
   <Card>
   <CardImg top width="100%" src={ei} alt="Card image cap" />
   <CardBody>
   <CardTitle tag="h5">Event Inventors</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">Organize Events</CardSubtitle>
   <CardText>For a Community to be active, Regular Events and speakers are a must. Good Collaboration between clubs is Important and thats what this team does</CardText>
   <Button>Button</Button>
   </CardBody>
   </Card>
   </div>
      </Col>
   
      <Col>
      <div>
   <Card>
   <CardImg top width="100%" src={ec} alt="Card image cap" />
   <CardBody>
   <CardTitle tag="h5">EEto Core</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">Manages Fundamental and Inner Working of the Org</CardSubtitle>
   <CardText>This is most important club for the community, all major decisions are taken by a panel of EEto core.We need smartest of people and really motivated people for working for this social cause.</CardText>
   <Button>Button</Button>
   </CardBody>
   </Card>
   </div>
      </Col>
    </Row>
   </Container>
 )
}
