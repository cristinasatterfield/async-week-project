import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const HomePageComponent = () => {
  return (
    <Container className="my-3">
      <Row className="justify-content-md-center align-items-md-center my-2" xs={1} sm={2}>
        {/* <Row> */}
        <Col>
          <Image src='/showcase.jpg' fluid />
        </Col>
        <Col align="center">
          <div className="d-grid gap-2">
            <h1>It's your house.</h1>
            <h3><span class="text-secondary">Let's transform it into your home.</span></h3>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePageComponent;
