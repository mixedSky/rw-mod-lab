import { CSS } from "./constants/editor-css-classes.js";

export class ProcessScreen {

    static #parentContainer;

    static #screenElement;
    static #nameProcessElement;

    static #createBaseElements(){
        if (this.#screenElement){
            console.error(new Error("The basic elements have already been created."));
            debugger;
            return;
        }

        this.#screenElement = document.createElement("div");
        this.#screenElement.classList.add(CSS.LOADING_SCREEN_BACKGROUND);
        
        this.#nameProcessElement = document.createElement("span");
        this.#nameProcessElement.classList.add(CSS.ALUMNI_SANS_PINSTRIPE_BOLD);
        this.#nameProcessElement.classList.add(CSS.TEXT_LARGE);
        this.#screenElement.appendChild(this.#nameProcessElement);

        if (this.#parentContainer)
            this.setParent(this.#parentContainer);
    }

    static setParent(parent){
        if (!(parent instanceof HTMLDivElement)){
            console.error(new Error("The argument was not a DOM type."));
            debugger;
            return;
        }

        this.#parentContainer = parent;

        if (this.#screenElement){
            this.#parentContainer.appendChild(this.#screenElement);
        }
    }

    static show(nameProcess = ""){
        if (!this.#parentContainer){
            console.error(new Error("The parent for whom the screen should be displayed has not been assigned."));
            debugger;
            return;
        }

        if (this.#screenElement && this.#screenElement.hidden === false){
            console.error(new Error("The process screen was shown."));
            debugger;
            return;
        }

        if (!this.#screenElement){
            this.#createBaseElements();
        }
        else{
            this.#screenElement.hidden = false;
        }

        this.#nameProcessElement.textContent = nameProcess;
    }

    static hide(){
        if (!document.body.app){
            console.error(new Error("The call was made before the app element was loaded."));
            debugger;
            return;
        }

        if (this.#screenElement && this.#screenElement.hidden === true){
            console.error(new Error("The process screen is already hidden."));
            debugger;
            return;
        }

        this.#screenElement.hidden = true;
    }

    static setProcessName(nameProcess){
        if (!this.#screenElement || !this.#nameProcessElement || this.#screenElement.hidden){
            console.error(new Error("The process screen was not shown, but someone tried to change the process name."));
            debugger;
            return;
        }

        this.#nameProcessElement.textContent = nameProcess;
    }
}