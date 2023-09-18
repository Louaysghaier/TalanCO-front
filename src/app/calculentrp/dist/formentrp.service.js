"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormentrpService = void 0;
var core_1 = require("@angular/core");
var FormentrpService = /** @class */ (function () {
    function FormentrpService(http) {
        this.http = http;
    }
    FormentrpService.prototype.submitresourcesData = function (ResourceData) {
        var url = 'http://localhost:8081/api/ListResources/sum_carbo_resource';
        return this.http.post(url, ResourceData);
    };
    FormentrpService.prototype.submitTransportData = function (transportData, apiUrl) {
        return this.http.post(apiUrl, transportData);
    };
    FormentrpService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FormentrpService);
    return FormentrpService;
}());
exports.FormentrpService = FormentrpService;
