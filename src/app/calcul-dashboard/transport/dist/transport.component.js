"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransportComponent = void 0;
var core_1 = require("@angular/core");
var TransportComponent = /** @class */ (function () {
    function TransportComponent(formService) {
        this.formService = formService;
    }
    TransportComponent.prototype.ngOnInit = function () {
    };
    TransportComponent.prototype.submitTransportData = function () {
        // Define the API URL based on the selected transport option
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
        // Send a request to the API with the selected transport option
        this.formService.submitTransportData({ option: this.selectedTransportOption }, apiUrl).subscribe(function (transportResponse) {
            // Handle the transport response if needed
            console.log('Transport Response:', transportResponse);
        }, function (transportError) {
            // Handle errors if the transport request fails
            console.error('Transport Error:', transportError);
        });
    };
    TransportComponent = __decorate([
        core_1.Component({
            selector: 'app-transport',
            templateUrl: './transport.component.html',
            styleUrls: ['./transport.component.css']
        })
    ], TransportComponent);
    return TransportComponent;
}());
exports.TransportComponent = TransportComponent;
