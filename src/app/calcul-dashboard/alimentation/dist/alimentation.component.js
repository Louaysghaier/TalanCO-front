"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlimentationComponent = void 0;
var core_1 = require("@angular/core");
var AlimentationComponent = /** @class */ (function () {
    function AlimentationComponent() {
        this.mangeAuSein = false;
        this.apportDuDehors = false;
        this.alimentationDataEmitter = new core_1.EventEmitter();
    }
    AlimentationComponent.prototype.ngOnInit = function () {
    };
    AlimentationComponent.prototype.emitAlimentationData = function () {
        var alimentationData = {
            test: this.mangeAuSein || this.apportDuDehors // Set 'test' based on checkbox selection
        };
        this.alimentationDataEmitter.emit(alimentationData);
    };
    __decorate([
        core_1.Output()
    ], AlimentationComponent.prototype, "alimentationDataEmitter");
    AlimentationComponent = __decorate([
        core_1.Component({
            selector: 'app-alimentation',
            templateUrl: './alimentation.component.html',
            styleUrls: ['./alimentation.component.css']
        })
    ], AlimentationComponent);
    return AlimentationComponent;
}());
exports.AlimentationComponent = AlimentationComponent;
