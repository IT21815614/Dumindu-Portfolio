import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 5,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 3,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "React Apps",
    projects: 2,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Group Project Name",
    tenure: "2020-10-10",
    role: "Your part",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Group Project Name",
    tenure: "2020-10-10",
    role: "Your part",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Group Project Name",
    tenure: "2020-10-10",
    role: "Your part",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];



export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
