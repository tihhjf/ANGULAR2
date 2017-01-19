"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LifeCycleComponent = (function () {
    function LifeCycleComponent() {
        this.valorInicial = 10;
    }
    LifeCycleComponent.prototype.ngOnInit = function () {
    };
    LifeCycleComponent.prototype.ngOnChanges = function () {
    };
    LifeCycleComponent.prototype.ngDoCheck = function () {
    };
    LifeCycleComponent.prototype.ngAfterContentInit = function () {
    };
    LifeCycleComponent.prototype.ngAfterContentChecked = function () {
    };
    LifeCycleComponent.prototype.ngAfterViewInit = function () {
    };
    LifeCycleComponent.prototype.ngAfterViewChecked = function () {
    };
    LifeCycleComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LifeCycleComponent.prototype, "valorInicial", void 0);
    LifeCycleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lifecycle',
            template: "\n\t\t<p>{{ valorInicial }}</p>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], LifeCycleComponent);
    return LifeCycleComponent;
}());
exports.LifeCycleComponent = LifeCycleComponent;
//# sourceMappingURL=life-cycle.component.js.map