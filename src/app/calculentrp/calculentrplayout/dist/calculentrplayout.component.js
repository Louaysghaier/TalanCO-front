"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculentrplayoutComponent = void 0;
var core_1 = require("@angular/core");
var formentrpdata_model_1 = require("../formentrpdata.model");
var CalculentrplayoutComponent = /** @class */ (function () {
    function CalculentrplayoutComponent(FormentrpService) {
        this.FormentrpService = FormentrpService;
        this.transportData = new formentrpdata_model_1.TransportData(0, 0, 0);
        this.ResourceData = new formentrpdata_model_1.ResourceData(0, 0, 0, 0, 0);
    }
    CalculentrplayoutComponent.prototype.ngOnInit = function () {
    };
    CalculentrplayoutComponent.prototype.onTransportDataEmitted = function (transportData) {
        this.transportData = transportData;
    };
    CalculentrplayoutComponent.prototype.onresourcesDataEmitted = function (ResourceData) {
        this.ResourceData = ResourceData;
    };
    CalculentrplayoutComponent.prototype.submitForm = function () {
        this.FormentrpService.submitresourcesData(this.ResourceData).subscribe(function (ResourceDataResponse) {
            console.log('ResourceData Response:', ResourceDataResponse);
        }, function (ResourceDataerror) {
            console.error('resource Error:', ResourceDataerror);
        });
    };
    CalculentrplayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-calculentrplayout',
            templateUrl: './calculentrplayout.component.html',
            styleUrls: ['./calculentrplayout.component.css']
        })
    ], CalculentrplayoutComponent);
    return CalculentrplayoutComponent;
}());
exports.CalculentrplayoutComponent = CalculentrplayoutComponent;
