import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import bg3 from "../../../assets/utils/images/originals/citynights.jpg";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation
import AuthService from "../../../services/authService";
import {toast, Bounce} from 'react-toastify'
import { useDispatch } from "react-redux";


const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    passwordRep: "",
  });
  const [errors, setErrors] = useState({}); // For form validation errors
  const [regError, setRegError] = useState("")

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const notify2 = () => {
    toast(
      "Registration Successfull !!",
      {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: "bottom-center",
        type: "success",
      }
    );
  };

  const validateForm = () => {
    setRegError("")
    const validationErrors = {};
    if (!formData.email) validationErrors.email = "Email is required.";
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.password) validationErrors.password = "Password is required.";
    if (formData.password !== formData.passwordRep) {
      validationErrors.passwordRep = "Passwords do not match.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Validate before submitting

    try {
      const response = await AuthService.register(formData,dispatch)
      if(response.message.toLowerCase().includes("success")){
        notify2()
      }
      navigate("/user/login"); // Navigate to login page after successful registration
    } catch (error) {
      setRegError(error);
      // Handle errors appropriately
    }
  };

  return (
    <Fragment>
      <div className="h-100">
        <Row className="h-100 g-0">
          <Col
            lg="7"
            md="12"
            className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center"
          >
            <Col lg="9" md="10" sm="10" className="mx-auto app-login-box">
              <div className="app-logo" />
              <h4>
                <div>Welcome,</div>
                <span>
                  It only takes a{" "}
                  <span className="text-success">few seconds</span> to create
                  your account
                </span>
              </h4>
              <div>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">
                          <span className="text-danger">*</span> Email
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email here..."
                          value={formData.email}
                          onChange={handleChange}
                          invalid={!!errors.email} // Add validation feedback
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input
                          type="text"
                          name="name"
                          id="exampleName"
                          placeholder="Name here..."
                          value={formData.name}
                          onChange={handleChange}
                          invalid={!!errors.name} // Add validation feedback
                        />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">
                          <span className="text-danger">*</span> Password
                        </Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password here..."
                          value={formData.password}
                          onChange={handleChange}
                          invalid={!!errors.password} // Add validation feedback
                        />
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePasswordRep">
                          <span className="text-danger">*</span> Repeat
                          Password
                        </Label>
                        <Input
                          type="password"
                          name="passwordRep"
                          id="examplePasswordRep"
                          placeholder="Repeat Password here..."
                          value={formData.passwordRep}
                          onChange={handleChange}
                          invalid={!!errors.passwordRep} // Add validation feedback
                        />
                        {errors.passwordRep && <div className="text-danger">{errors.passwordRep}</div>}
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className="mt-3" check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Accept our{" "}
                      <a
                        href="https://colorlib.com/"
                        onClick={(e) => e.preventDefault()}
                      >
                        Terms and Conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                  <div className="mt-4 d-flex align-items-center">
                    <h5 className="mb-0">
                      Already have an account?{" "}
                      <Link
                        to="/user/login"
                        className="text-primary"
                      >
                        Sign in
                      </Link>
                    </h5>
                    <div className="ms-auto">
                      <Button
                        color="primary"
                        className="btn-wide btn-pill btn-shadow btn-hover-shine"
                        size="lg"
                      >
                        Create Account
                      </Button>
                    </div>
                  </div>
                  {regError && <div className="text-danger mt-3">{regError}</div>}
                </Form>
              </div>
            </Col>
          </Col>
          <Col lg="5" className="d-lg-flex d-xs-none">
            <div className="slider-light">
              <Slider {...settings}>
                <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                  <div
                    className="slide-img-bg"
                    style={{
                      backgroundImage: `url(${bg3})`,
                    }}
                  />
                  <div className="slider-content">
                    <h3>Scalable, Modular, Consistent</h3>
                    <p>
                      Easily exclude the components you don't require.
                      Lightweight, consistent Bootstrap-based styles across all
                      elements and components.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Register;
