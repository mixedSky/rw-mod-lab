import { ProcessScreen } from "../modules/process-screen.js";
import { UserInputBlocker } from "./../modules/user-input-blocker.js";
import { MAIN_IDS } from "./../modules/constants/editor-main-ids.js";

import { RuntimeLocalizer } from "../modules/localization/runtime-localizer.js";
import { LocaleState } from "../modules/localization/locale-state.js";
import { Localizer } from "../modules/localization/localizer.js";

const appContainer = document.getElementById(MAIN_IDS.APP);

ProcessScreen.setParent(appContainer);

// TODO START
// Improve in the future
const mainTransaltionsRu = await fetch("json/localization/ru.json").then(x => x.json());
const mainTransaltionsEn = await fetch("json/localization/en.json").then(x => x.json());

Localizer.addTranslations("ru", mainTransaltionsRu);
Localizer.addTranslations("en", mainTransaltionsEn);

LocaleState.setAppLanguageCode("ru");
// TODO END

RuntimeLocalizer.setContainerForRuntimeLocalization(appContainer);

ProcessScreen.show("Start");

UserInputBlocker.blockKeyboard();