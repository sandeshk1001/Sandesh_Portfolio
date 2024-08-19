import { BiLogoAngular, BiLogoCss3, BiLogoHtml5, BiLogoJava, BiLogoPostgresql, BiLogoReact, BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";


const ProjectsData = [
  {
    id: "1",
    name: "OpenSignal Product",
    image: "./ComblinkdataProduct.jpg",
    icons: [BiLogoAngular, BiLogoCss3, BiLogoSpringBoot, BiLogoPostgresql, BiLogoJava],
    description: "Product plateform to analysis there market",
  },
  {
    id: "2",
    name: "OpenSignal Admin",
    image: "./ComblinkdataProduct.jpg",
    icons: [BiLogoReact, BiLogoCss3, BiLogoSpringBoot, BiLogoPostgresql, BiLogoJava],
    description: "Product Admin to manage product permission and client's",

  },
  {
    id: "3",
    name: "Ascentify Admin",
    image: "./sff.jpg",
    icons: [BiLogoAngular, BiLogoTypescript, BiLogoCss3, BiLogoSpringBoot, BiLogoPostgresql, BiLogoJava],
    description: "Admin Dashboard to manage all the courses",
  },
  {
    id: "4",
    name: "UrbanAura Company Portfolio",
    image: "./UrbanAura.jpg",
    icons: [BiLogoReact, BiLogoCss3,BiLogoHtml5],
    description: "This is portfolio for a construction company UrbanAura",
    // github: "https://urbanaura.co.in/",
    demo: "https://urbanaura.co.in/",
  },
];

export default ProjectsData;
