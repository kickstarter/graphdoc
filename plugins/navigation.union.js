"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("../lib/utility");
var NavigationScalars = /** @class */ (function (_super) {
    __extends(NavigationScalars, _super);
    function NavigationScalars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationScalars.prototype.getTypes = function (buildForType) {
        var _this = this;
        return this.document.types
            .filter(function (type) { return type.kind === utility_1.UNION; })
            .map(function (type) {
            return new utility_1.NavigationItem(type.name, _this.url(type), type.name === buildForType);
        });
    };
    NavigationScalars.prototype.getNavigations = function (buildForType) {
        var types = this.getTypes(buildForType);
        if (types.length === 0) {
            return [];
        }
        return [new utility_1.NavigationSection("Unions", types)];
    };
    return NavigationScalars;
}(utility_1.Plugin));
exports.default = NavigationScalars;
