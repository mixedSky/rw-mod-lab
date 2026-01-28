import { LocaleState } from "./locale-state.js";

export class Localizer {

    static listOfTranslations = {};

    static addTranslations(languageCode, translations){
        if (LocaleState.isIso6391Code(languageCode) === false){
            console.error(new Error("The language code is incorrect."));
            debugger;
            return;
        }

        if (!translations){
            console.error(new Error("An undefined object was passed."));
            debugger;
            return;
        }

        if (!this.listOfTranslations[languageCode]) this.listOfTranslations[languageCode] = {};

        for(const [key, value] of Object.entries(translations)){
            if (this.listOfTranslations[languageCode][key]){
                this.listOfTranslations[languageCode][key] = {...this.listOfTranslations[languageCode][key], ...translations[key]};
            }
            else{
                this.listOfTranslations[languageCode][key] = value;
            }
        }
    }
    
    static getLocalizedTextById(addonName, textId){
        if (typeof addonName !== "string" || typeof textId !== "string"){
            console.error(new Error("Non-text data was transmitted."));
            debugger;
            return;
        }

        return this.listOfTranslations?.[LocaleState.getAppLanguageCode()]?.[addonName]?.[textId];
    }
}