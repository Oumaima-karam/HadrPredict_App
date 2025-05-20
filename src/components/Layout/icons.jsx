import { Path } from 'leaflet';
import {
    FaHome, 
    FaFileAlt, 
    FaThLarge, 
    FaMap, 
    FaSignOutAlt 
} from 'react-icons/fa';

export const menuItems = [
    { icon: <FaHome />, text: "Home", path: "/LoginPage" },
    { icon: <FaThLarge />, text: "Dashboard", path: "/" },
    { icon: <FaMap />, text: "Cartegraphie", path: "/GeoCarte" },
    { icon: <FaFileAlt />, text: "Formulaire", path: "/FormPage" },
    { icon: <FaSignOutAlt />, text: "Logout", path: "/LoginPage" },
];