import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';


const QuoteFormComponent = () => {
  return (
    <Container className="my-3">
      <h1>Request a Quote</h1>
      <p>Services from JuniorBunior Co. are trusted, reliable and professional. Please fill out the form completely, and we will get back to you as soon as possible.</p>
      <p>The fields marked with <span style={{ color: "red" }}>*</span> are required.</p>
      <Form align="left">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name <span style={{ color: "red" }}>*</span></Form.Label>
            <Form.Control placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name <span style={{ color: "red" }}>*</span> </Form.Label>
            <Form.Control placeholder="Enter last name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number <span style={{ color: "red" }}>*</span> </Form.Label>
            <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="###-###-####" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhoneType">
            <Form.Label>Phone Type</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose One</option>
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email <span style={{ color: "red" }}>*</span> </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmailConfirmation">
            <Form.Label>Confirm Email <span style={{ color: "red" }}>*</span> </Form.Label>
            <Form.Control type="email" placeholder="Confirm email" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmailOffers">
          <Form.Label>Would you like to recieve occasional tips and offers via email?</Form.Label>
          <div>
            <Form.Check
              inline
              label="Yes, sign me up!"
              name="emailOffers"
              type="radio"
              id="emailOffersYes"
            />
            <Form.Check
              inline
              label="No, thanks."
              name="emailOffers"
              type="radio"
              id="emailOffersNo"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridReferral">
          <Form.Label>How did you hear about us?</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Internet Search</option>
            <option>Mailing List</option>
            <option>Social Media - Facebook/Instagram/Twitter/Other</option>
            <option>Referral</option>
            <option>Yellow Pages</option>
            <option>Yelp</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridServiceType">
          <Form.Label>Service Type <span style={{ color: "red" }}>*</span></Form.Label>
          <div>
            <Form.Check
              inline
              label="Residential"
              name="serviceType"
              type="radio"
              id="residential"
            />
            <Form.Check
              inline
              label="Commercial"
              name="serviceType"
              type="radio"
              id="commercial"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridServiceDescription">
          <Form.Label>What can JuniorBunior Co do for you? <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Describe what work needs to be completed."
            style={{ height: '100px' }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default QuoteFormComponent;
