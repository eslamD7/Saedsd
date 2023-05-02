import React from "react";
import "./GivingCases.css";
import { Badge } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function GivingCases() {
  const navigate = useNavigate();

  return (
    <div className="CasesColumn">
      <div className="Filters">
        <Select
          placeholder="حدد نوع الاحتياج/الفائض"
          className="selectorAddNew"
        >
          <option value="option1">كهرباء</option>
          <option value="option2">ماء</option>
        </Select>
        <Select placeholder="حدد نوع الحالة" className="selectorAddNew">
          <option value="option1">احتياج</option>
          <option value="option2">فائض</option>
        </Select>
        <Select placeholder="حدد اسم الولاية" className="selectorAddNew">
          <option value="option1">الخرطوم</option>
          <option value="option2">الجزيرة</option>
        </Select>
      </div>
      <div className="Cases">
        <Link onClick={() => navigate("/GivingCase")} className="Link">
          <div className="GivingCases">
            <div className="GivingCasesDetails">
              <h1 className="GivingCasesDetailsH1">عندي كهرباء زايدة</h1>
              <p className="black">
                بيتنا الكهرباء طافية يتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
                الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
                الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافية
              </p>
              <div className="GivingCasesDetailsBadges">
                <Badge className="GivingCasesDetailsBadge">الخرطوم</Badge>
                <Badge className="GivingCasesDetailsBadge">بري</Badge>
                <Badge className="GivingCasesDetailsBadge">كهرباء</Badge>
              </div>
            </div>
            <img
              src={"./no-pic.png"}
              alt="Sudan's Flag"
              className="GivingCasesImg"
            />
            <Badge colorScheme="red" className="GivingCasesBadge">
              عاجل
            </Badge>
          </div>
        </Link>
        <Link onClick={() => navigate("/GivingCase")} className="Link">
          <div className="GivingCases">
            <div className="GivingCasesDetails">
              <h1 className="GivingCasesDetailsH1">عندي كهرباء زايدة</h1>
              <p className="black">
                بيتنا الكهرباء طافية يتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
                الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
                الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافية
              </p>
              <div className="GivingCasesDetailsBadges">
                <Badge className="GivingCasesDetailsBadge">الخرطوم</Badge>
                <Badge className="GivingCasesDetailsBadge">بري</Badge>
                <Badge className="GivingCasesDetailsBadge">كهرباء</Badge>
              </div>
            </div>
            <img
              src={"./no-pic.png"}
              alt="Sudan's Flag"
              className="GivingCasesImg"
            />
            <Badge colorScheme="red" className="GivingCasesBadge">
              عاجل
            </Badge>
          </div>
        </Link>
        <Link onClick={() => navigate("/GivingCase")} className="Link">
          <div className="GivingCases">
            <div className="GivingCasesDetails">
              <h1 className="GivingCasesDetailsH1">محتاج كهرباء بشكل عاجل</h1>
              <p className="black">
                بيتنا الكهرباء طافية يتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
                الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافيةيتنا
                الكهرباء طافيةيتنا الكهرباء طافيةيتنا الكهرباء طافية
              </p>
              <div className="GivingCasesDetailsBadges">
                <Badge className="GivingCasesDetailsBadge">الخرطوم</Badge>
                <Badge className="GivingCasesDetailsBadge">بري</Badge>
                <Badge className="GivingCasesDetailsBadge">كهرباء</Badge>
              </div>
            </div>
            <img
              src={"./no-pic.png"}
              alt="Sudan's Flag"
              className="GivingCasesImg"
            />
            <Badge colorScheme="red" className="GivingCasesBadge">
              عاجل
            </Badge>
          </div>
        </Link>
        <div className="Pagination">
          <Button colorScheme="blue">التالي</Button>
          <Button colorScheme="gray">1</Button>
          <Button colorScheme="gray">..5</Button>
          <Button colorScheme="gray">30</Button>
          <Button colorScheme="blue">السابق</Button>
        </div>
      </div>
    </div>
  );
}

export default GivingCases;
