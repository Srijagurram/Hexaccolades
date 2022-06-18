import { Button, Col, Container, Row } from "react-bootstrap";
import Branding from "../Branding/Branding";
import bgImg from "../../assests/for_button.JPG";
import heroRightImg from "../../assests/hero-right.png";
import { useEffect } from "react";

import "./LoginView.css";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { Navigate, useNavigate } from "react-router-dom";
const LoginView = () => {
  const buttonstyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: `33% 85%`,
    borderRadius: 70,
    borderColor: "white",
  };
  const { instance } = useMsal();

  function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  }

  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="hero">
      <div className="left-hero hero-child">
        <Row>
          <Branding />
        </Row>
        <Row>
          <div className="space text-center">
            <label className="thin-black ">Sign in to your account</label>
          </div>
        </Row>
        <Row>
          <div className="space200 text-center">
            <Button style={buttonstyle} onClick={() => handleLogin(instance)}>
              <label className="thin-white">Sign in with Hexagon</label>
            </Button>
          </div>
        </Row>
        <div className="footer">
          <a href="#" className="link-hero">
            <span>Privacy</span>
          </a>
          <span className="separator"></span>
          <a href="#" className="link-hero">
            <span>Terms &amp; Conditions</span>
          </a>
        </div>
      </div>
      <div className="right-hero hero-child">
        <div className="hero-img">
          <img src={heroRightImg} alt="placeholder" />
        </div>
        <img src={bgImg} className="overlay-img" alt="overlay" />
      </div>
    </div>
  );
};

export default LoginView;
