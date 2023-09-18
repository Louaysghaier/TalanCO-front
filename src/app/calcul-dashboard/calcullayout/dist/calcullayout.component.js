"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalcullayoutComponent = void 0;
var core_1 = require("@angular/core");
var formdata_model_1 = require("../formdata.model");
var formdata_model_2 = require("../formdata.model");
var formdata_model_3 = require("../formdata.model");
var CalcullayoutComponent = /** @class */ (function () {
    function CalcullayoutComponent(FormService) {
        this.FormService = FormService;
        this.workData = new formdata_model_1.WorkData(0, 0, 0);
        this.alimentationData = new formdata_model_2.AlimentationData(false);
        this.transportData = new formdata_model_3.TransportData(0, 0, 0);
    }
    CalcullayoutComponent.prototype.ngOnInit = function () {
        this.currentYear = new Date().getFullYear();
    };
    // Handle emitted work data
    CalcullayoutComponent.prototype.onWorkDataEmitted = function (workData) {
        this.workData = workData;
        // You can perform any additional logic or validation here
    };
    // Handle emitted alimentation data
    CalcullayoutComponent.prototype.onAlimentationDataEmitted = function (alimentationData) {
        this.alimentationData = alimentationData;
        // Additional logic if needed
    };
    // Handle emitted transport data
    CalcullayoutComponent.prototype.onTransportDataEmitted = function (transportData) {
        this.transportData = transportData;
        // Additional logic if needed
    };
    CalcullayoutComponent.prototype.submitForm = function () {
        // Create a function to submit all data to respective API endpoints
        // Send work data
        this.FormService.submitWorkData(this.workData).subscribe(function (workResponse) {
            // Handle the work response if needed
            console.log('Work Response:', workResponse);
        }, function (workError) {
            // Handle errors if the work request fails
            console.error('Work Error:', workError);
        });
        // Send alimentation data
        this.FormService.submitAlimentationData(this.alimentationData).subscribe(function (alimentationResponse) {
            // Handle the alimentation response if needed
            console.log('Alimentation Response:', alimentationResponse);
        }, function (alimentationError) {
            // Handle errors if the alimentation request fails
            console.error('Alimentation Error:', alimentationError);
        });
    };
    CalcullayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-calcullayout',
            templateUrl: './calcullayout.component.html',
            styleUrls: ['./calcullayout.component.css']
        })
    ], CalcullayoutComponent);
    return CalcullayoutComponent;
}());
exports.CalcullayoutComponent = CalcullayoutComponent;
