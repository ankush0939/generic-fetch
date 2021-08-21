import React from "react";
import '../App.css';

const Footer = ({ name }) => {
    let footerstyle = {
        position: 'relative',
        height: 200,
        marginTop: 200,
        bottom: 0
    }
  return (
    <div style={ footerstyle }>
      <p style={{ textAlign: "center" }}>
        &copy;Copyright <span style={{ color: "orange" }}>{name}</span>
      </p>
      <p style={{ textAlign: "center" }}>
        This webpage is a part of "React Learning Series"
      </p>
    </div>
  );
};

export default Footer;
