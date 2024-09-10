import { GeneralLinks, LoadProjects } from "./load";
import "./styles.css";

class Project {
    constructor (title, description, imgSrc="placeholder-image.png", gitRepo="https://github.com/ziko1905?tab=repositories", livePreview="https://github.com/ziko1905?tab=repositories") {
        this.title = title;
        this.description = description;
        this.imgSrc = require(`../media/images/${imgSrc}`);
        this.gitRepo = gitRepo;
        this.livePreview = livePreview;
    }
    getLinks () {
        return [
            { url: this.gitRepo, imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: `Repo of ${this.title}`},
            { url: this.livePreview, imgSrc: require("../media/images/live-preview.svg"), alt: `Live preview of ${this.title}`}
        ]
    }
}

export const projectLst = [
    new Project("Dummy title 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Project("Dummy title 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Project("Dummy title 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Project("Dummy title 4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Project("Dummy title 5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Project("Dummy title 6", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
];

const MAIN_PROJECTS_DIV = document.querySelector(".projects-div")
LoadProjects.load(projectLst, MAIN_PROJECTS_DIV);

const ABOUT_ME_LINKS = [
    {url: "https://github.com/ziko1905?tab=repositories", imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "My github"},
    {url: "https://www.linkedin.com/in/karlo-%C4%8Dehuli%C4%87-65337820b/", imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg", alt: "My linkedin"},
    {url: "https://leetcode.com/u/Karlo19/", imgSrc: "https://www.svgrepo.com/show/306328/leetcode.svg", alt: "My leetcode"},
]

const AboutMeLinks = new GeneralLinks(ABOUT_ME_LINKS, "about-me-links");
AboutMeLinks.load(document.querySelector(".about-div"))