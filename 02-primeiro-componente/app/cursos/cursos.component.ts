import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cursos-lista',
	templateUrl: 'cursos.component.html' 
})

export class CursosComponent{
	nomePortal = 'tiago.traning';

	cursos = ['Angular 2', 'Java', 'Ext JS']
}