import { atom } from "recoil";

const sidebarToggleAtom = atom({
    key: 'sidebarToggleAtom',
    default: false,
})

export default sidebarToggleAtom;