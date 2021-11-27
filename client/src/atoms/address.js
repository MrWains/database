import { atom } from "recoil";

const addressAtom = atom({
  key: "address",
  default: "",
});

export default addressAtom;
