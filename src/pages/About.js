import React, {Component} from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import img_4 from '../asserts/4.jpg'
import img_5 from '../asserts/5.jpg'
import img_6 from '../asserts/6.jpg'
import img_7 from '../asserts/7.jpg'
import img_8 from '../asserts/8.jpg'

export default class About extends Component {
  render() {
    return (
      <Container className="mt-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-2">
                <Tab.Pane eventKey="first">
                  <img src={img_4} height={500} alt="Design" className="d-block mx-auto" />
                  <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis doloribus ducimus totam ratione nihil voluptates hic deleniti voluptatibus aut dolore nulla, non cupiditate, possimus cum consequatur rem quod veniam?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src={img_5} height={500} alt="Team" className="d-block mx-auto" />
                  <p className="mt-4" >3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis doloribus ducimus totam ratione nihil voluptates hic deleniti voluptatibus aut dolore nulla, non cupiditate, possimus cum consequatur rem quod veniam?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src={img_6} height={500} alt="Programming" className="d-block mx-auto" />
                  <p className="mt-4" >4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis doloribus ducimus totam ratione nihil voluptates hic deleniti voluptatibus aut dolore nulla, non cupiditate, possimus cum consequatur rem quod veniam?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src={img_7} height={500} alt="Frameworks" className="d-block mx-auto" />
                  <p className="mt-4" >5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis doloribus ducimus totam ratione nihil voluptates hic deleniti voluptatibus aut dolore nulla, non cupiditate, possimus cum consequatur rem quod veniam?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src={img_8} height={500} alt="Libraries" className="d-block mx-auto" />
                  <p className="mt-4" >6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis doloribus ducimus totam ratione nihil voluptates hic deleniti voluptatibus aut dolore nulla, non cupiditate, possimus cum consequatur rem quod veniam?</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}