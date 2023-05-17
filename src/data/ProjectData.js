import calcProject from "../assets/images/projects/calcproj.jpg";
import jsGame from "../assets/images/projects/jsgameproj.jpg";
import punkApi from "../assets/images/projects/punk-api-project-preview.jpg";
import clientProject from "../assets/images/projects/skinclinic-react-project-copy.jpg";
import javaGame from "../assets/images/projects/java-game-snap.jpg";
import fullstackProject from "../assets/images/projects/beckys-bookcase.jpg";

const projectData = [
  {
    id: 1,
    image: calcProject,
    techStack: "HTML, SCSS, Java Script",
    title: "Calculator",
    text: "The goal of this project was to create a functioning calculator with HTML, SCSS and JavaScript. My calculator takes two inputs, processes a sum, and then outputs the answer. As well as functioning, it also had to look good and be responsive for different device sizes.",
    linkOne: "https://github.com/BeckyRushton/Calculator-Project",
    linkTwo: "https://beckyrushton.github.io/Calculator-Project",
  },
  {
    id: 2,
    image: jsGame,
    techStack: "HTML, SCSS, Java Script",
    title: "Java Script Game",
    text: " The goal of this project was to create a playable browser-based game build with html, CSS/SCSS and JavaScript. My project is a cat-themed card game where you choose your method of attack against the computer and win by winning 5 rounds.",
    linkOne: "https://github.com/BeckyRushton/Cat-Attack-JS-Game",
    linkTwo: "https://beckyrushton.github.io/Cat-Attack-JS-Game/",
  },
  {
    id: 3,
    image: punkApi,
    techStack: "SCSS, Java Script, React",
    title: "Punk API",
    text: "The goal of this project was to create a fully functional website using React. My project takes beers from an API database and allows you to search and filter them. It also lets you interact with the beers with an overlay and a link to a beer page.",
    linkOne: "https://github.com/BeckyRushton/punk-api-project",
    linkTwo: "https://beckyrushton.github.io/punk-api-project/",
  },
  {
    id: 4,
    image: clientProject,
    techStack: "SCSS, Java Script, React",
    title: "Client Group Project",
    text: "The goal of this project was to collaborate as a group to create a fictional app to be used by staff and clients of a skin clinic. Pair programming was a key method in completing this task and in doing this, I worked on various components, containers and styling with my team.",
    linkOne: "https://github.com/nology-tech/Sable-client-project",
    linkTwo: "https://nology-tech.github.io/Sable-client-project/",
  },
  {
    id: 5,
    image: javaGame,
    techStack: "Java",
    title: "Card Game",
    text: "The goal of this project was to create a terminal-based card game built in Java. The user can play Snap as many times as they like using the simple menu and by pressing enter, the user draws a card each turn until they win. ",
    linkOne: "https://github.com/BeckyRushton/card-game-java",
    linkTwo: "https://github.com/BeckyRushton/card-game-java",
  },
  {
    id: 6,
    image: fullstackProject,
    techStack: "SCSS, Java Script, React, Java, Spring, MySQL",
    title: "Full Stack App",
    text: "The goal of this project was to use everything I learned throughout the course to create a website using both front and back end programming. I used React to style the front-end and creating my own API and database methodolody using Java, Spring and MySQL.",
    linkOne: "https://github.com/BeckyRushton/fullstack-project",
    linkTwo: "https://github.com/BeckyRushton/fullstack-project",
  },
];
export default projectData;
