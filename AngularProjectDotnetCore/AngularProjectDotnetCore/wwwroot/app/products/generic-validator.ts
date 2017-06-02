import { FormGroup } from "@angular/forms";

export class GenericValidator {
    constructor(private validationMessages: { [key: string]: { [key: string]: string } }) {

    }
    processMessages(container: FormGroup): { [key: string]: string } {
        let messages = {};
        for (let controlkey in container.controls) {
            if (container.controls.hasOwnProperty(controlkey)) {
                let c = container.controls[controlkey];
                if (c instanceof FormGroup) {
                    let childMessage = this.processMessages(c);
                    Object.assign(messages, childMessage);
                } else {
                    if (this.validationMessages[controlkey]) {
                        messages[controlkey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlkey][messageKey]) {
                                    messages[controlkey] += this.validationMessages[controlkey][messageKey] + ' ';
                                }
                            })
                        }
                    }
                }
            }
        }
        return messages;
    }
}