class ProjectElement {
    constructor (prj)  {
        this.prj = prj;

        const main = document.createElement("div");
        const img = document.createElement("img");
        const descDiv = document.createElement("div");
        this.title = document.createElement("h4");
        const description = document.createElement("p");

        main.className = "project-div";
        main.classList.add("shadow");
        main.classList.add("content-div");
        img.src = prj.imgSrc;
        img.classList.add("project-img")
        descDiv.className = "desc-div"
        this.title.textContent = prj.title;
        description.textContent = prj.description
        

        descDiv.appendChild(this.title);
        descDiv.appendChild(description);
        main.appendChild(img);
        main.appendChild(descDiv)
        this.createLinks(descDiv);

        return main
    }
    createLinks (elem) {
        const links = new GeneralLinks(this.prj.getLinks(), "project-links")
        elem.appendChild(links.getElement())
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