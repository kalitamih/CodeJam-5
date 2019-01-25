import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Avatar from "./img/Ryhor_Baradulin.jpg";
import Navigation from "./Navigation";

class Writers extends Component {
  state = {};
  render() {
    return (
      <div className="writers">
        <Navigation />
        <div className="search_container">
          <Container>
            <Row>
              <Col>
                <Form>
                  <FormGroup>
                    <Label for="exampleSearch">Search Author</Label>
                    <Input
                      type="search"
                      name="search"
                      id="exampleSearch"
                      placeholder="search placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Filter by City</Label>
                    <Input
                      type="select"
                      name="Filter by City"
                      id="exampleSelect"
                    >
                      <option>Minsk</option>
                      <option>Vitebsk</option>
                      <option>Grodno</option>
                      <option>Babruisk</option>
                      <option>Magilev</option>
                    </Input>
                  </FormGroup>
                </Form>
              </Col>
              <Col>
                <Card>
                  <CardImg top src={Avatar} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Григорий Бородулин</CardTitle>
                    <CardSubtitle>Витебская обл</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Read more</Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg top src={Avatar} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Григорий Бородулин</CardTitle>
                    <CardSubtitle>Витебская обл</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Read more</Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg top src={Avatar} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Григорий Бородулин</CardTitle>
                    <CardSubtitle>Витебская обл</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Read more</Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg top src={Avatar} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Григорий Бородулин</CardTitle>
                    <CardSubtitle>Витебская обл</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Read more</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Writers;
