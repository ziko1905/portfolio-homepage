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

export class GeneralLinks {
    constructor (objList, specificClass) {
        this.main = document.createElement("div");

        this.main.classList.add("links-div");
        if (specificClass) this.main.classList.add(specificClass);

        objList.forEach(link => {
            const linkElem = new MediaLink(link);
            this.main.appendChild(linkElem.getElement());
        })
    }
    load (elemToLoad) {
        elemToLoad.appendChild(this.main)
    }
    getElement () {
        return this.main
    }
}

class MediaLink {
    constructor (linkObj) {
        this.main = document.createElement("a");
        this.img = document.createElement("img");
        this.main.href = linkObj.url;
        this.img.src = linkObj.imgSrc;
        this.img.alt = linkObj.alt;
        this.main.appendChild(this.img)
        this.style();
    }
    style () {
        this.img.classList.add("icon");
    }
    getElement () {
        return this.main
    }
}