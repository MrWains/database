import { atom } from "recoil";

const lastNameDoctorAtom = atom({
  key: "lastNameDoctor",
  default: "",
});

export default lastNameDoctorAtom;
