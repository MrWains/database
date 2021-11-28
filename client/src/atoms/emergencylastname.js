import { atom } from "recoil";

const emergencyLastNameAtom = atom({
  key: "emergencyLastName",
  default: "",
});

export default emergencyLastNameAtom;
