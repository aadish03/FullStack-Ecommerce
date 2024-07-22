import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const disptatch = useDispatch();
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    disptatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="py-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            value={address ? address : ""}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
          />
        </Form.Group>

        <Form.Group controlId="city" className="py-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            value={city ? city : ""}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
          />
        </Form.Group>
        <Form.Group controlId="postalCode" className="py-3">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            required
            type="text"
            value={postalCode ? postalCode : ""}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter Postal Code"
          />
        </Form.Group>
        <Form.Group controlId="country" className="py-3">
          <Form.Label>Country</Form.Label>
          <Form.Control
            required
            type="text"
            value={country ? country : ""}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter Country"
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="py-3">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
