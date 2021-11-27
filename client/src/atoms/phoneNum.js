import { atom } from "recoil";

const phoneNumAtom = atom({
  key: "phone_num",
  default: 0,
});

export default phoneNumAtom;
