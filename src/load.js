import { projectLst } from ".";

class ProjectElement {
    constructor (prj)  {
        this.prj = prj;

        const main = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h4");
        const description = document.createElement("p");

        main.className = "project-div";
        main.classList.add("shadow");
        main.classList.add("content-div");
        title.textContent = prj.title;
        description.textContent = prj.description
        
        main.appendChild(img);
        main.appendChild(title);
        main.appendChild(description);

        return main
    }
} 

export class LoadProjects {
    static load(projects, elemToLoad) {
        projects.forEach(prj => {
            elemToLoad.appendChild(new ProjectElement(prj));
        });
    }
}