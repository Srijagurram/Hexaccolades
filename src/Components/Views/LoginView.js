import { Button, Col, Container, Row } from "react-bootstrap";
import Branding from "../Branding/Branding";
import bgImg from "../../assests/for_button.JPG";
import heroRightImg from "../../assests/hero-right.png";
import { useEffect } from "react";

import "./LoginView.css";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
//import { loginRequest } from "../../authConfig";
import { Navigate, useNavigate } from "react-router-dom";
import { authProvider } from "../../authConfig";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import Home from "../Home";
const LoginView = () => {
  const buttonstyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: `33% 85%`,
    borderRadius: 70,
    borderColor: "white",
  };
  //const { instance } = useMsal();

  // function handleLogin(instance) {
  //   instance.loginRedirect(authProvider.login).catch((e) => {
  //     console.error(e);
  //   });
  // }

  //const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  return (
    <AzureAD provider={authProvider}>
  {
    ({login, logout, authenticationState, error, accountInfo}) => {
      switch (authenticationState) {
        case AuthenticationState.Authenticated:
          return (
            <p>
              {/* <span>Welcome, {accountInfo.account.userName}!</span>
              <span>{accountInfo.jwtIdToken}</span>
              <button onClick={logout}>Logout</button> */}
              {/* <Home/> */}
            </p>
          );
        case AuthenticationState.Unauthenticated:
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
                  <Button style={buttonstyle} onClick={authProvider.login}>
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
        case AuthenticationState.InProgress:
          return (<p>Authenticating...</p>);
      }
    }
  }
</AzureAD>
  );
};

export default LoginView;
