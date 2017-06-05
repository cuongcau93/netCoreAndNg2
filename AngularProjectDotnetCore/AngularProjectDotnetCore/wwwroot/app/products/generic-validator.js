"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var GenericValidator = (function () {
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlkey) {
            if (container.controls.hasOwnProperty(controlkey)) {
                var c = container.controls[controlkey];
                if (c instanceof forms_1.FormGroup) {
                    var childMessage = this_1.processMessages(c);
                    Object.assign(messages, childMessage);
                }
                else {
                    if (this_1.validationMessages[controlkey]) {
                        messages[controlkey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlkey][messageKey]) {
                                    messages[controlkey] += _this.validationMessages[controlkey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlkey in container.controls) {
            _loop_1(controlkey);
        }
        return messages;
    };
    return GenericValidator;
}());
exports.GenericValidator = GenericValidator;
//# sourceMappingURL=generic-validator.js.map