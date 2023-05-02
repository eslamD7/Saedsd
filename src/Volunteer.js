import React from "react";
import "./Volunteer.css";
import { Badge } from "@chakra-ui/layout";

function Volunteer() {
  return (
    <div className="Volunteer">
      <img src={"./no-pic.png"} alt="Sudan's Flag" className="VolunteerImg" />

      <div className="VolunteerDetails">
        <h1 className="VolunteerDetailsH1">محتاج كهرباء بشكل عاجل</h1>
        <p className="detailDetails">
          بيتنا الكهرباء طافية يتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
          الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء
          طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافية بيتنا الكهرباء طافية يتنا
          الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء
          طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
          الكهرباء طافية بيتنا الكهرباء طافية يتنا الكهرباء طافيةيتنا الكهرباء
          طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
          الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافية بيتنا الكهرباء
          طافية يتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
          الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء
          طافيةيتنا الكهرباء طافية
        </p>
        <div className="VolunteerDetailsBadges">
          <Badge className="VolunteerDetailsBadge">الخرطوم</Badge>
          <Badge className="VolunteerDetailsBadge">بري</Badge>
          <Badge className="VolunteerDetailsBadge">كهرباء</Badge>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
