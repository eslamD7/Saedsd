import React from "react";
import "./GivingCase.css";
import { Badge } from "@chakra-ui/layout";

function GivingCase() {
  return (
    <div className="GivingCase">
      <img src={"./no-pic.png"} alt="Sudan's Flag" className="GivingCaseImg" />

      <div className="GivingCaseDetails">
        <Badge colorScheme="red" className="GivingCaseBadge">
          عاجل
        </Badge>
        <h1 className="GivingCaseDetailsH1">محتاج كهرباء بشكل عاجل</h1>
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
        <div className="GivingCaseDetailsBadges">
          <Badge className="GivingCaseDetailsBadge">الخرطوم</Badge>
          <Badge className="GivingCaseDetailsBadge">بري</Badge>
          <Badge className="GivingCaseDetailsBadge">كهرباء</Badge>
        </div>
      </div>
    </div>
  );
}

export default GivingCase;
