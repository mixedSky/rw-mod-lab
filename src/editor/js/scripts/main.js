import { ProcessScreen } from "../modules/process-screen.js";
import { UserInputBlocker } from "./../modules/user-input-blocker.js";
import { CSS } from "./../modules/constants/editor-css-classes.js"

const appContainer = document.createElement("div");
appContainer.id = "app";
appContainer.classList.add(CSS.APP);
document.body.appendChild(appContainer);

ProcessScreen.setParent(appContainer);
ProcessScreen.show("Start");

UserInputBlocker.blockKeyboard();