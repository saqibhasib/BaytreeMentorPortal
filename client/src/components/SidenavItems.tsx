import { CgLogOut } from 'react-icons/cg';
import { IoPersonOutline } from 'react-icons/io5';
import { FiBarChart2, FiBriefcase, FiGrid } from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const volunteerItems1 = [
    {
        to: "/search",
        icon: <BsIcons.BsSearch className="nav-icon"/>
    },
    {
        to: "/dashboard",
        icon: <BsIcons.BsHouseDoor className="nav-icon"/>
    },
    {
        to: "/create-session",
        icon: <BsIcons.BsCalendar2Check className="nav-icon"/>
    },
    {
        to: "/messages",
        icon: <BsIcons.BsChatLeft className="nav-icon"/>
    },
    {
        to: "/questionnaire",
        icon: <FiBriefcase className="nav-icon"/>
    },
    {
        to: "/sessions",
        icon: <FiBarChart2 className="nav-icon"/>
    },
    {
        to: "/records",
        icon: <FiGrid className="nav-icon"/>
    },
    {
        to: "/notifications",
        icon: <BsIcons.BsBell className="nav-icon"/>
    },
];
export const volunteerItems2 = [
    {
        to: "/profile",
        icon: <IoPersonOutline className="nav-icon"/>
    },
    {
        to: "/settings",
        icon: <BsIcons.BsGear className="nav-icon"/>
    },
];
export const adminItems1 = [
    {
        to: "/dashboard",
        icon: <BsIcons.BsHouseDoor className="nav-icon"/>
    },
    {
        to: "/messages",
        icon: <BsIcons.BsChatLeft className="nav-icon"/>
    },
    {
        to: "/notifications",
        icon: <BsIcons.BsBell className="nav-icon"/>
    },
    {
        to:"/mentors-list",
        icon: <BsIcons.BsPeople className="nav-icon"/>
    },
    {
        to: "/signup",
        icon: <BsIcons.BsPersonPlus className="nav-icon"/>
    },
];
export const adminItems2 = [
    {
        to: "/profile",
        icon: <IoPersonOutline className="nav-icon"/>
    },
    {
        to: "/settings",
        icon: <BsIcons.BsGear className="nav-icon"/>
    },
];
