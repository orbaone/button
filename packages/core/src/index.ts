import { createButton } from "./elements/button";
import { createIframe } from "./elements/iframe";
import { verificationUrl } from "./helpers/defaultConfig";
import { OrbaOneConfig } from "./helpers/types";

import { getSessionUrl, isValidConfig } from "./helpers/utils";

function initializeVerification(config: OrbaOneConfig, button: ReturnType<typeof createButton>): void {
    const { apiKey, applicantId, onSuccess, onCancelled, onError, steps, companyId } = config;

    //Set Loading state
    button.setState("loading");

    const url = getSessionUrl({verificationUrl, apiKey, steps, companyId, applicantId});
    const iframe = createIframe({url, applicantId, companyId, onSuccess, onCancelled, onError, onChange:(state) => {
        button.setState(state);
    }});
    iframe.connect();
}

export function renderButton(config: OrbaOneConfig): void {
    const { target, disableStyle, onChange } = config;

    if (isValidConfig(["apiKey", "target", "onSuccess", "onCancelled", "onError", "steps"], config)) {
        const button = createButton(target, disableStyle, onChange);

        button.el.onclick = () => {
            initializeVerification(config, button);
        };
    }
}

export { OrbaOneConfig };
