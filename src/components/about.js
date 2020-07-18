import React from "react"
import { Accordion, Card } from "react-bootstrap"

const About = () => (
  <Accordion defaultActiveKey="1">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Learn more about me
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>I am a cool person</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)

export default About
