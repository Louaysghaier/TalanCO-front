"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormService = void 0;
var core_1 = require("@angular/core");
var FormService = /** @class */ (function () {
    function FormService(http) {
        this.http = http;
    }
    // Send work data to the work API endpoint
    FormService.prototype.submitWorkData = function (workData) {
        var url = 'http://localhost:8081/api/works/sum_carbo_works';
        return this.http.post(url, workData);
    };
    // Send alimentation data to the alimentation API endpoint
    FormService.prototype.submitAlimentationData = function (alimentationData) {
        var url = 'http://localhost:8081/api/Level/sum_carbo_works';
        return this.http.post(url, alimentationData);
    };
    // Send transport data to the transport API endpoint
    FormService.prototype.submitTransportData = function (transportData, apiUrl) {
        return this.http.post(apiUrl, transportData);
    };
    FormService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;
