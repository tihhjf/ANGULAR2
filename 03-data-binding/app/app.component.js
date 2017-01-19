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
var data_binding_component_1 = require('./data-binding/data-binding.component');
var life_cycle_component_1 = require('./ciclo/life-cycle.component');
var AppComponent = (function () {
    function AppComponent() {
        this.deletarConteudo = false;
        this.valorInicial = 15;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <!--h1>Angular 2 Boilerplate</h1-->\n        <!--p>Hello World!</p-->\n        <!--exemplo-data-binding></exemplo-data-binding-->\n        <lifecycle [valorInicial]=\"valorInicial\" *ngIf=\"deletarConteudo != true\"></lifecycle>\n        <button (click)=\"valorInicial = 20\">Mudar o valor</button>\n        <button (click)=\"deletarConteudo = true\">Deletar</button>\n    ",
            directives: [data_binding_component_1.DataBindingComponent, life_cycle_component_1.LifeCycleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map