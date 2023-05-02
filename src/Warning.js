import React from "react";
import "./Warning.css";
import { Alert } from "@chakra-ui/react";

function Warning() {
  return (
    <div>
      <Alert status="warning" className="AlertWarning">
        ( وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ
        اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا )
        <br />
        في وقت الشدة تظهر المعادن الحقيقية للشعب المتكاتف, #لا_للإستغلال
      </Alert>
    </div>
  );
}

export default Warning;
