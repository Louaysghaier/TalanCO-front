"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.calculentrpmodel = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var animations_1 = require("@angular/platform-browser/animations");
var stepper_1 = require("@angular/material/stepper");
var footer_component_1 = require("../shared/footer/footer.component");
var entrptransp_component_1 = require("./entrptransp/entrptransp.component");
var resources_component_1 = require("./resources/resources.component");
var calculentrplayout_component_1 = require("./calculentrplayout/calculentrplayout.component");
var calrouters = [
    { path: 'calculentrp',
        component: calculentrplayout_component_1.CalculentrplayoutComponent,
        children: [
            // 1st Route
            { path: 'resource', component: resources_component_1.ResourcesComponent },
            // 3rd Route
            { path: 'transport', component: entrptransp_component_1.EntrptranspComponent },
            // 4th Route
            // 5th Route
            { path: 'footer', component: footer_component_1.FooterComponent },
        ] },
];
var calculentrpmodel = /** @class */ (function () {
    function calculentrpmodel() {
    }
    calculentrpmodel = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                forms_1.FormsModule,
                stepper_1.MatStepperModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild(calrouters)
            ],
            declarations: [
                entrptransp_component_1.EntrptranspComponent,
                resources_component_1.ResourcesComponent,
                calculentrplayout_component_1.CalculentrplayoutComponent,
            ],
            providers: [],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            exports: [router_1.RouterModule]
        })
    ], calculentrpmodel);
    return calculentrpmodel;
}());
exports.calculentrpmodel = calculentrpmodel;
