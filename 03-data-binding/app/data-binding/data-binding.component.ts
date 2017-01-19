import { Component } from '@angular/core';

import {InputPropertyComponent} from './input-property.component';
import {OutputPropertyComponent} from './output-property.component';

@Component({
	moduleId: module.id,
	selector: 'exemplo-data-binding',
	templateUrl: 'data-binding.component.html',
	styleUrls: ['data-binding.component.css'],
	directives: [InputPropertyComponent, OutputPropertyComponent]
})
export class DataBindingComponent {
	constructor() {}

	url = 'http://www.google.com';
	urlImg = 'http://lorempixel.com/400/200/';
	conteudoAtual : string = '';
	conteudoSalvo : string = '';
	isMouseOver = false;

	nome: string = '';

	pessoa = {nome: '', idade: 18};

	nomeCurso:string = 'Angular 2';

	valorInicial: number = 10;

	onClick(){
		alert('Btn clicado!');
	}

	onKeyUp(event:any){
		console.log(event);
		this.conteudoAtual = event.target.value;
	}

	onSave(valor: string){
		this.conteudoSalvo = valor;
	}

	onMouseSpan(){
		this.isMouseOver = !this.isMouseOver;
	}

	onValorMudou(event: any){
		alert(event.novoValor);
	}

}