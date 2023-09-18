"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResourcesComponent = void 0;
var core_1 = require("@angular/core");
var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
        this.input1 = 0;
        this.input2 = 0;
        this.input3 = 0;
        this.input4 = 0;
        this.input5 = 0;
        this.ResourceDataEmitter = new core_1.EventEmitter();
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent.prototype.emitWorkData = function () {
        var ResourceData = {
            A: this.input1,
            B: this.input2,
            C: this.input3,
            D: this.input4,
            E: this.input5
        };
        this.ResourceDataEmitter.emit(ResourceData);
    };
    ResourcesComponent.prototype.submitresourcesData = function () {
        this.emitWorkData();
    };
    __decorate([
        core_1.Output()
    ], ResourcesComponent.prototype, "ResourceDataEmitter");
    ResourcesComponent = __decorate([
        core_1.Component({
            selector: 'app-resources',
            templateUrl: './resources.component.html',
            styleUrls: ['./resources.component.css']
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());
exports.ResourcesComponent = ResourcesComponent;
