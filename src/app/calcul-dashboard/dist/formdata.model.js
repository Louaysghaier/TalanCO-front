"use strict";
// work-data.model.ts
exports.__esModule = true;
exports.TransportData = exports.AlimentationData = exports.WorkData = void 0;
var WorkData = /** @class */ (function () {
    function WorkData(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
    return WorkData;
}());
exports.WorkData = WorkData;
// alimentation-data.model.ts
var AlimentationData = /** @class */ (function () {
    function AlimentationData(test) {
        this.test = test;
    }
    return AlimentationData;
}());
exports.AlimentationData = AlimentationData;
// transport-data.model.ts
var TransportData = /** @class */ (function () {
    function TransportData(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
    return TransportData;
}());
exports.TransportData = TransportData;
