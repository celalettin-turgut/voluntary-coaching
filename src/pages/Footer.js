import { Col, Row } from "antd";
import React from "react";
import { StyledRow } from "../components/style";
import { FooterStyle } from "../style";

const Footer = () => {
  return (
    <FooterStyle>
      <Row className="footer-container">
        <Col>Copyright 2021 | Ehrenamtliche Nachhilfe</Col>
        <Col>Facebook | Instagram | Github | LikedIn</Col>
      </Row>
    </FooterStyle>
  );
};

export default Footer;
