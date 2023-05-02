import React from "react";
import "./AddVolunteer.css";
import { useState, useEffect } from "react";
import { FormControl } from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

// Add volunteer
function AddVolunteer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selected, setSelected] = React.useState("");
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  // Use recaptcha Google
  const [verfied, setVerfied] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  // States & Local districts
  const Khartoum = [
    "كررى",
    "امبدة",
    "بحري",
    "شرق النيل",
    "امدرمان",
    "جبل اولياء",
    "الخرطوم",
    "دارفور",
  ];

  const NileRiver = ["الدامر", "عطبرة", "شندي", "المتمة", "بربر", "أبو حمد"];

  const Algazera = [
    "الكاملين",
    "ود مدني",
    "24 القرشي",
    "شرق الجزيرة",
    "الحصاحيصا",
    "ام القرى",
    "مدني الكبرى",
    "المناقل",
    "جنوب الجزيرة",
    "رفاعة",
  ];

  const Gedaref = [
    "القضارف",
    "الرهد",
    "وسط القضارف",
    "الفاو",
    "الفشقة",
    "البطانة",
    "القلابات الشرقية",
    "القلابات الغربية",
    "قلع النحل",
    "القريشة",
    "باسندا",
  ];

  const RedSea = [
    "بورسودان",
    "سواكن",
    "جبيت المعادن",
    "جبيت سكة حديد",
    "اربعات",
    "حلايب",
    "طوكر",
  ];

  const NorthSudan = ["عبري", "حلفا القديمة", "كرمة", "دنقلا"];

  const Kassala = [
    "كسلا",
    "خشم القربة",
    "تلكوك",
    "جنوب القاش (أروما)",
    "شمال الدلتا",
    "ود الحليو",
    "حلفا الجديدة",
    "نهر عطبرة",
    "ريف كسلا",
  ];

  const SouthDarfur = [
    "نيالا",
    "رهيد البردى",
    "الضعين",
    "عد الفرسان",
    "مرشنج",
    "شطاية",
    "دمسو",
    "ام دافوق",
    "الردوم",
    "السنطة",
    "نتيقة",
    "كبم",
    "كتيلا",
    "قريضة",
    "شرق الجبل",
    "الوحدة",
    "بليل",
    "السلام",
    "برام",
    "تلس",
    "كأس",
    "نيالا شمال",
    "نيالا جنوب",
  ];

  const WhiteNileRiver = [
    "كوستي",
    "ربك",
    "الكوة",
    "الدويم",
    "القطينة",
    "تندلتي",
    "الجبلين",
    "الجزيرة أبا",
    "الشوال",
    "نعيمة",
    "كنانة",
    "ام جر",
    "شبشة",
    "الصوفي",
    "الجمالاب",
    "الدرادر",
    "الهشابة",
    "قلى",
    "السلام",
    "ام رمته",
  ];

  const WestKordofan = [
    "الميرم",
    "الدبب",
    "الأضية",
    "الخوى",
    "غبيش",
    "ابو زبد",
    "السنوط",
    "النهود",
    "كيلك",
    "ودبندا",
    "لقاوة",
    "السلام",
    "بابنوسة",
    "المجلد",
    "أبيي",
  ];

  const BlueNileRiver = [
    "الدمازين",
    "التضامن",
    "الروصيرص",
    "باو",
    "الكرمك",
    "ود الماحي",
  ];

  const NorthKordofan = [
    "الرهد",
    "ام دم",
    "غرب بارا",
    "جبرة الشيخ",
    "ام روابه",
    "سودري",
    "شيكان",
  ];

  const WestDarfur = [
    "الجنينة",
    "كلبس",
    "بيضة",
    "هبلية",
    "سربا",
    "كرينك",
    "جبل مون",
    "فوربرنقا",
    "زالنجي",
  ];

  const NorthDarfur = [
    "الفاشر",
    "ام كدادة",
    "كتم",
    "الواحة",
    "اللعيت",
    "كلمندو",
    "مليط",
    "الكومة",
    "المالحة",
    "دار السلام",
    "كبكابية",
    "سرف عمرة",
    "السريف",
    "الطينة",
    "امبرو",
    "كرنوي",
    "طويلة",
    "طويشة",
  ];

  const EastDarfur = [
    "الضعين",
    "بحر العرب",
    "الفردوس",
    "ابوكارنكا",
    "شعيرية",
    "عديلة",
    "ابو جابرة",
    "ياسين",
    "عسلاية",
  ];

  const CentralDarfur = [
    "زالنجي ازوم",
    "قارسلا ",
    "نرتتي",
    "روكورو",
    "قولو",
    "بندس",
    "مكجر",
    "ام دخن",
    "وادي صالح",
    "غرب جبل مرة",
    "شمال جبل مرة",
    "وسط جبل مرة",
    "بندسي",
  ];

  const Sennar = [
    "الدالي والمزموم",
    "شرق سنار",
    "سنار",
    "ابو حجار",
    "السوكي",
    "الدندر",
    "سنجة",
  ];

  const SouthKordofan = [
    "الليري",
    "ابو كرشولا",
    "التضامن",
    "ام دورين",
    "البرام",
    "هبيلا",
    "الريف الشرقي",
    "تلودي",
    "هيبان",
    "دلامي",
    "القوز",
    "الدلنج",
    "رشاد",
    "ابو جبيهة",
    "العاسية",
    "كادوقلي",
    "السلام",
    "لقاوة",
    "كيلك",
    "السنوط",
    "الريف الشرقي",
    "البرام",
    "قدير",
    "هيبان",
  ];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "Khartoum") {
    type = Khartoum;
  } else if (selected === "NileRiver") {
    type = NileRiver;
  } else if (selected === "Algazera") {
    type = Algazera;
  } else if (selected === "Gedaref") {
    type = Gedaref;
  } else if (selected === "RedSea") {
    type = RedSea;
  } else if (selected === "Kassala") {
    type = Kassala;
  } else if (selected === "SouthDarfur") {
    type = SouthDarfur;
  } else if (selected === "WhiteNileRiver") {
    type = WhiteNileRiver;
  } else if (selected === "WestKordofan") {
    type = WestKordofan;
  } else if (selected === "BlueNileRiver") {
    type = BlueNileRiver;
  } else if (selected === "NorthKordofan") {
    type = NorthKordofan;
  } else if (selected === "WestDarfur") {
    type = WestDarfur;
  } else if (selected === "NorthDarfur") {
    type = NorthDarfur;
  } else if (selected === "EastDarfur") {
    type = EastDarfur;
  } else if (selected === "CentralDarfur") {
    type = CentralDarfur;
  } else if (selected === "Sennar") {
    type = Sennar;
  } else if (selected === "SouthKordofan") {
    type = SouthKordofan;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <div className="caseContainer">
      <h4>
        اضافة متطوع جديد <br />
        (ادخل بيانات صحيحة من فضلك)
      </h4>
      <label className="lableClass"> * اسمك الكامل</label>
      <Input className="inputAddNew" placeholder="ادخل اسمك بالكامل هنا" />
      <br />
      <br />
      <label className="lableClass"> * تحديد الولاية</label>
      <Select
        placeholder="تحديد الولاية"
        className="selectorAddNew"
        onChange={changeSelectOptionHandler}
      >
        <option value="Khartoum">ولاية الخرطوم</option>
        <option value="NileRiver">ولاية نهر النيل</option>
        <option value="Algazera">ولاية الجزيرة</option>
        <option value="Gedaref">ولاية القضارف</option>
        <option value="RedSea">ولاية البحر الاحمر</option>
        <option value="Kassala">ولاية كسلا</option>
        <option value="SouthDarfur">ولاية جنوب دارفور</option>
        <option value="WhiteNileRiver">ولاية نهر النيل الابيض</option>
        <option value="WestKordofan">ولاية غرب كردفان</option>
        <option value="BlueNileRiver">ولاية نهر النيل الازرق</option>
        <option value="NorthKordofan">ولاية شمال كردفان</option>
        <option value="WestDarfur">ولاية غرب دارفور</option>
        <option value="NorthDarfur">ولاية شمال دارفور</option>
        <option value="EastDarfur">ولاية شرق دارفور</option>
        <option value="CentralDarfur">ولاية وسط دارفور</option>
        <option value="Sennar">ولاية سنار</option>
        <option value="SouthKordofan">ولاية جنوب كردفان</option>
      </Select>
      <br />
      <label className="lableClass"> ( اختياري ) تحديد المحلية</label>
      <Select
        name="local"
        placeholder="تحديد المحلية"
        className="selectorAddNew"
      >
        {options}
      </Select>
      <br />
      <label className="lableClass"> * ادخل اسم الحي</label>
      <Input
        placeholder="مثال: حي النصر, شرق النيل"
        className="inputAddNew"
        name="district"
      />
      <br />
      <br />
      <label className="lableClass"> * ادخل العنوان</label>
      <Input
        placeholder="مثال: منزل لونه أحمر بجوار مسجد أبو بكر الصديق"
        className="inputAddNew"
        name="address"
      />
      <br /> <br />
      <label className="lableClass"> * نوع المساعدة؟</label>
      <Select
        name="helptype"
        placeholder="حدد نوع المساعدة المقدمة"
        className="selectorAddNew"
      >
        <option value="elect">كهرباء</option>
        <option value="water">ماء</option>
        <option value="topup">رصيد</option>
        <option value="gaz">غاز</option>
        <option value="internet">انترنت</option>
        <option value="house">سكن</option>
        <option value="food">مواد غذائية</option>
        <option value="med">أدوية</option>
        <option value="cars">ترحيل</option>
        <option value="cash">كاش</option>
        <option value="doctors">كادر طبي</option>
        <option value="hospital">مركز صحي</option>
        <option value="emerg">اسعاف</option>
        <option value="statestravel">تنقل بين الولايات</option>
        <option value="call">اتصال لاقارب</option>
        <option value="ox">اكسجين</option>
        <option value="blood">تبرع دم</option>
        <option value="others">أخرى</option>
      </Select>
      <br />
      <label className="lableClass"> * ادخل رقم الهاتف</label>
      <Input
        name="phone"
        type="number"
        placeholder="مثال: *****091185"
        className="inputAddNew"
      />
      <br />
      <br />
      <label className="lableClass"> ارفاق صورة ( اختياري ) </label>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            name="photo"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>حذف الصورة</button>
        </div>
      )}
      <br />
      <br />
      <br />
      <input
        className="UploadImage"
        type="file"
        name="photo"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <br />
      <br />
      <Textarea
        name="description"
        placeholder="اكتب التفاصيل هنا"
        className="textAreaAddNew"
      />
      <ReCAPTCHA
        className="Recaptcha"
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
      {}
      <button className="submitButton" disabled={!verfied}>
        ارسال
      </button>
    </div>
  );
}

export default AddVolunteer;
