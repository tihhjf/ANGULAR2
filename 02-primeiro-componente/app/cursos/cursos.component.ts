import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
	moduleId: module.id,
	selector: 'cursos-lista',
	templateUrl: 'cursos.component.html' ,
	providers: [CursosService]
})

export class CursosComponent{

	nomePortal = 'tiago.traning';

	cursos: string[];

	constructor(cursosService: CursosService){
		this.cursos = cursosService.getCursos();
	}
}