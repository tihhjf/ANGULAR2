import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { LifeCycleComponent } from './ciclo/life-cycle.component';

@Component({
    selector: 'my-app',
    template: `
        <!--h1>Angular 2 Boilerplate</h1-->
        <!--p>Hello World!</p-->
        <!--exemplo-data-binding></exemplo-data-binding-->
        <lifecycle [valorInicial]="valorInicial" *ngIf="deletarConteudo != true"></lifecycle>
        <button (click)="valorInicial = 20">Mudar o valor</button>
        <button (click)="deletarConteudo = true">Deletar</button>
    `,
    directives: [DataBindingComponent, LifeCycleComponent]
})
export class AppComponent { 

	deletarConteudo = false;
	valorInicial = 15;

}
