import { CSS } from "./constants/editor-css-classes.js";

export class ProcessScreen {
    static #screenElement;
    static #nameProcessElement;

    static #createBaseElements(){
        const screenElement = document.createElement("div");
        screenElement.classList.add(CSS.LOADING_SCREEN_BACKGROUND);
        document.body.appendChild(screenElement);
        
        const nameProcessElement = document.createElement("span");
        nameProcessElement.classList.add(CSS.ALUMNI_SANS_PINSTRIPE_BOLD);
        nameProcessElement.classList.add(CSS.TEXT_LARGE);
        screenElement.appendChild(nameProcessElement);

        return [screenElement, nameProcessElement];
    }

    static show(nameProcess = ""){
        if (!document.body){
            console.error(new Error("The call was made before the body was loaded."));
            debugger;
            return;
        }

        if (this.#screenElement && this.#screenElement.hidden === false){
            console.error(new Error("The process screen was shown."));
            debugger;
            return;
        }

        if (!this.#screenElement){
            [this.#screenElement, this.#nameProcessElement] = this.#createBaseElements();
        }
        else{
            this.#screenElement.hidden = false;
        }

        this.#nameProcessElement.textContent = nameProcess;
    }

    static hide(){
        if (!document.body){
            console.error(new Error("The call was made before the body was loaded."));
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