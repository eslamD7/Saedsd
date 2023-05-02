import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "@chakra-ui/react";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <button className="addCaseButton" onClick={() => navigate("/AddCase")}>
        إضافة حالة +
      </button>

      <div>
        <Link className="FlagLink" href="/">
          <img src={"./flags.png"} alt="Sudan's Flag" />
          <h4
            className="SaedComTitle"
            style={{ textDecoration: "none !important" }}
          >
            ساعد.كوم
          </h4>
        </Link>
      </div>

      <button
        className="addVolunteerButton"
        onClick={() => navigate("/AddVolunteer")}
      >
        متطوع؟
      </button>
    </div>
  );
}

export default Header;
