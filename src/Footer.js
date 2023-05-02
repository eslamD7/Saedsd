import React from "react";
import "./Footer.css";
import { Alert } from "@chakra-ui/react";

function Footer() {
  return (
    <div>
      <Alert status="success" className="Footer">
        <p>هذا الموقع وقف لله تعالى لروح الفقيد محمد صالح جميل رحمه الله</p>
      </Alert>
    </div>
  );
}

export default Footer;
