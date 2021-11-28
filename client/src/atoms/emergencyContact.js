import { atom } from "recoil";

const emergencyContactAtom = atom({
  key: "emergencyContact",
  default: 0,
});

export default emergencyContactAtom;
