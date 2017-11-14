"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SummernoteComponent = (function () {
    function SummernoteComponent(formBuilder) {
        this.postText = "";
        this.postSaved = false;
        this._formBuilder = formBuilder;
        this.savePostForm = this._formBuilder.group({});
    }
    SummernoteComponent.prototype.ngOnInit = function () {
        // $ init summernote
        $('#summernote').summernotee();
    };
    // on submit method
    SummernoteComponent.prototype.savePost = function (event) {
        var _this = this;
        var text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {
            this.postText = text;
            this.postSaved = true;
            setTimeout(function () { return _this.postSaved = false; }, 2000);
        }
        else {
            console.error("posts empty");
            this.postSaved = false;
        }
    };
    return SummernoteComponent;
}());
SummernoteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'summernote.component.html',
        styleUrls: ['summernote.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SummernoteComponent);
exports.SummernoteComponent = SummernoteComponent;
//# sourceMappingURL=summernote.component.js.map