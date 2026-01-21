export class UserInputBlocker {

    static #isKeyboardBlocked = false;

    static #eventList = ["keydown", "keypress", "keyup"];
    static #handler = e => {
        e.preventDefault();
        e.stopPropagation();
    };

    static get isKeyboardBlocked() { return this.#isKeyboardBlocked; }

    static #addHandlers() {
        this.#eventList.forEach(event =>
            document.addEventListener(event, this.#handler, true)
        );
    }

    static #removeHandlers() {
        this.#eventList.forEach(event =>
            document.removeEventListener(event, this.#handler, true)
        );
    }

    static blockKeyboard() {

        if (this.#isKeyboardBlocked) {
            console.error(new Error("Calling for blocking user input when it is already blocked"));
            debugger;
            return;
        }

        this.#addHandlers();
        this.#isKeyboardBlocked = true;
    }

    static unblockKeyboard() {
        if (this.#isKeyboardBlocked === false) {
            console.error(new Error("Call to unlock user input when it is not locked"));
            debugger;
            return;
        }

        this.#removeHandlers();
        this.#isKeyboardBlocked = false;
    }
}

