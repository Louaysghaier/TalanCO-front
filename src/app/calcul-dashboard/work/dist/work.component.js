"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WorkComponent = void 0;
var core_1 = require("@angular/core");
var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
        this.input1 = 0;
        this.input2 = 0;
        this.input3 = 0;
        this.workDataEmitter = new core_1.EventEmitter();
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent.prototype.emitWorkData = function () {
        var workData = {
            A: this.input1,
            B: this.input2,
            C: this.input3
        };
        this.workDataEmitter.emit(workData);
    };
    WorkComponent.prototype.submitWorkData = function () {
        // Perform form validation if needed
        // Trigger the emission of work data
        this.emitWorkData();
    };
    __decorate([
        core_1.Output()
    ], WorkComponent.prototype, "workDataEmitter");
    WorkComponent = __decorate([
        core_1.Component({
            selector: 'app-work',
            templateUrl: './work.component.html',
            styleUrls: ['./work.component.css']
        })
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
