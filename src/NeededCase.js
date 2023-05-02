import React from "react";
import "./NeededCase.css";
import { Badge } from "@chakra-ui/layout";

function NeededCase() {
  return (
    <div className="NeededCase">
      <img src={"./no-pic.png"} alt="Sudan's Flag" className="NeededCaseImg" />

      <div className="NeededCaseDetails">
        <Badge colorScheme="red" className="NeededCaseBadge">
          عاجل
        </Badge>
        <h1 className="NeededCaseDetailsH1">محتاج كهرباء بشكل عاجل</h1>
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
        <div className="NeededCaseDetailsBadges">
          <Badge className="NeededCaseDetailsBadge">الخرطوم</Badge>
          <Badge className="NeededCaseDetailsBadge">بري</Badge>
          <Badge className="NeededCaseDetailsBadge">كهرباء</Badge>
        </div>
      </div>
    </div>
  );
}

export default NeededCase;
