import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faShippingFast,
  faCreditCard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <FontAwesomeIcon icon={faShippingFast} /> Shipping
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <FontAwesomeIcon icon={faShippingFast} /> Shipping
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <FontAwesomeIcon icon={faCreditCard} /> Payment
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <FontAwesomeIcon icon={faCreditCard} /> Payment
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <FontAwesomeIcon icon={faCheckCircle} /> Place Order
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <FontAwesomeIcon icon={faCheckCircle} /> Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
