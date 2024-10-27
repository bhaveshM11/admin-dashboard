import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import bg1 from "../../../assets/utils/images/originals/city.jpg";
import bg2 from "../../../assets/utils/images/originals/citydark.jpg";
import bg3 from "../../../assets/utils/images/originals/citynights.jpg";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation
import AuthService from "../../../services/authService";
import {toast, Bounce} from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages

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

  const notify2 = () => {
    toast(
      "Log In Successfull !!",
      {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: "bottom-center",
        type: "success",
      }
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset error state
    // Validate form data
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    try {
      // Make the API call to log in the user
      const userData = { email, password }
      const response = await AuthService.login(userData,dispatch);
      if(response.message.toLowerCase().includes("success")){
        notify2()
      }
      // Redirect to dashboard or any other page after successful login
      navigate("/dashboard"); // Change this to your desired route
    } catch (err) {
      setError(err); // Set error message
    }
  };

  return (
    <Fragment>
      <div className="h-100">
        <Row className="h-100 g-0">
          <Col lg="4" className="d-none d-lg-block">
            <div className="slider-light">
              <Slider {...settings}>
                <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                  <div
                    className="slide-img-bg"
                    style={{
                      backgroundImage: `url(${bg1})`,
                    }}
                  />
                  <div className="slider-content">
                    <h3>Perfect Balance</h3>
                    <p>
                      ArchitectUI is like a dream. Some think it's too good to
                      be true! Extensive collection of unified React Bootstrap
                      Components and Elements.
                    </p>
                  </div>
                </div>
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
                      Lightweight, consistent Bootstrap based styles across
                      all elements and components.
                    </p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                  <div
                    className="slide-img-bg opacity-6"
                    style={{
                      backgroundImage: `url(${bg2})`,
                    }}
                  />
                  <div className="slider-content">
                    <h3>Complex, but lightweight</h3>
                    <p>
                      We've included a lot of components that cover almost all
                      use cases for any type of application.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
            <Col lg="9" md="10" sm="10" xs="10" className="mx-auto app-login-box">
              <div className="app-logo" />
              <h4 className="mb-0">
                <div>Welcome back,</div>
                <span>Please sign in to your account.</span>
              </h4>
              <h6 className="mt-3">
                No account?{" "}
                <Link to="/user/register" className="text-primary"> {/* Use Link instead of <a> */}
                  Sign up now
                </Link>
              </h6>
              {error && <div className="text-danger">{error}</div>} {/* Display error messages */}
              <Row className="divider" />
              <div>
                <Form onSubmit={handleLogin}> {/* Call handleLogin on form submit */}
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input 
                          type="email" 
                          name="email" 
                          id="exampleEmail" 
                          placeholder="Email here..."
                          value={email} // Bind email state
                          onChange={(e) => setEmail(e.target.value)} // Update email state
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input 
                          type="password" 
                          name="password" 
                          id="examplePassword" 
                          placeholder="Password here..."
                          value={password} // Bind password state
                          onChange={(e) => setPassword(e.target.value)} // Update password state
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Keep me logged in
                    </Label>
                  </FormGroup>
                  <Row className="divider" />
                  <div className="d-flex align-items-center">
                    <div className="ms-auto">
                      <Link to="/user/forgot-password" className="btn-lg btn btn-link"> {/* Use Link instead of <a> */}
                        Recover Password
                      </Link>
                      <Button color="primary" size="lg" type="submit">
                        Login to Dashboard
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Login;
