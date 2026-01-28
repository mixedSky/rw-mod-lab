import { Localizer } from "./localizer.js";

export class RuntimeLocalizer {
    static #containerMutationObserver;

    static setContainerForRuntimeLocalization(container) {
        if (!(container instanceof HTMLDivElement)) {
            console.error(new Error("A container was not passed to the method."));
            debugger;
            return;
        }

        this.#containerMutationObserver = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type !== "childList") continue;

                mutation.addedNodes.forEach(node => {
                    if (!(node instanceof HTMLElement)) return;

                    if (node.hasAttribute('data-i12n')) this.#localizeElement(node);

                    node.querySelectorAll('[data-i12n]').forEach(x => {
                        this.#localizeElement(x);
                    });
                });
            }
        });

        this.#containerMutationObserver.observe(container, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    static #localizeElement(element) {
        if (!(element instanceof HTMLElement)) {
            console.error(new Error("A non-html element was passed."));
            debugger;
            return;
        }

        if (!element.dataset.i12n) {
            console.error(new Error("element is empty"));
            debugger;
            return;
        }

        const splittedDataI12n = element.dataset.i12n.split('.');

        if (splittedDataI12n.length !== 2){
            element.innerText = element.dataset.i12n;
            console.warn("Incorrectly specified data-i12n.");
            return;
        }

        const localizedText = Localizer.getLocalizedTextById(splittedDataI12n[0], splittedDataI12n[1]);

        if (localizedText === undefined)
            return;

        element.innerHTML = localizedText;
    }
}