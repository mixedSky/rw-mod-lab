import { Action } from "../custom-types/action.js";

export class LocaleState {

    static #clientLanguageCode;
    static #appLanguageCode;

    static onAppLanguageChanged = new Action();

    static get clientLanguage() { return this.#clientLanguageCode || this.#getClientLanguage(); }
    
    static setAppLanguageCode(languageCode){
        if (this.isIso6391Code(languageCode) === false){
            console.error(new Error("Attempt to assign an invalid language code"));
            debugger;
            return;
        }

        this.#appLanguageCode = languageCode;
        this.onAppLanguageChanged.invoke(languageCode);
    }

    static getAppLanguageCode(){
        return this.#appLanguageCode;
    }

    static isIso6391Code(code){
        return (typeof code === "string" && /^[a-z]{2}$/i.test(code));
    }

    static #getClientLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        const shortLang = userLang.split('-')[0];

        this.#clientLanguageCode = shortLang;
    
        return shortLang;
    }
    
}