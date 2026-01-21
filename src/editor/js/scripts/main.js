import { ProcessScreen } from "../modules/process-screen.js";
import { UserInputBlocker } from "./../modules/user-input-blocker.js";
import { MAIN_IDS } from "./../modules/constants/editor-main-ids.js";

const appContainer = document.getElementById(MAIN_IDS.APP);

ProcessScreen.setParent(appContainer);
ProcessScreen.show("Start");

UserInputBlocker.blockKeyboard();