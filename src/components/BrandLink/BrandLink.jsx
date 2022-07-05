import React from "react";
import { Link } from "react-router-dom";
import "./BrandLink.css";
const BrandLink = ({ classes }) => {
  return (
    <Link className={`navbar_brand ${classes}`} to="/">
      Welly
    </Link>
  );
};

export default BrandLink;
