"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EntrptranspComponent = void 0;
var core_1 = require("@angular/core");
var EntrptranspComponent = /** @class */ (function () {
    function EntrptranspComponent(FormentrpService) {
        this.FormentrpService = FormentrpService;
    }
    EntrptranspComponent.prototype.ngOnInit = function () {
    };
    EntrptranspComponent.prototype.submitTransportData = function () {
        var apiUrl = '';
        if (this.selectedTransportOption === 'option1') {
            apiUrl = 'http://localhost:8081/api/transport/sum_carbo_tP';
        }
        else if (this.selectedTransportOption === 'option2') {
            apiUrl = 'http://localhost:8081/api/transport/sum_carbo_tvt';
        }
        else if (this.selectedTransportOption === 'option3') {
            apiUrl = 'http://localhost:8081/api/transport/sum_carbo_tP';
        }
        this.FormentrpService.submitTransportData({ option: this.selectedTransportOption }, apiUrl).subscribe(function (transportResponse) {
            console.log('Transport Response:', transportResponse);
        }, function (transportError) {
            console.error('Transport Error:', transportError);
        });
    };
    EntrptranspComponent = __decorate([
        core_1.Component({
            selector: 'app-entrptransp',
            templateUrl: './entrptransp.component.html',
            styleUrls: ['./entrptransp.component.css']
        })
    ], EntrptranspComponent);
    return EntrptranspComponent;
}());
exports.EntrptranspComponent = EntrptranspComponent;
