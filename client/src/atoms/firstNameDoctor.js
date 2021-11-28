import { atom } from "recoil";

const firstNameDoctorAtom = atom({
  key: "firstNameDoctor",
  default: "",
});

export default firstNameDoctorAtom;
