import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'contador',
	template: `
		<div>
			<button (click)="decrementa()" type="button" class="btn btn-primary">-</button>
			<input type="text" [value]="valor" readonly/>
			<button (click)="incrementa()" type="button" class="btn btn-primary">+</button>
		</div>
	`
})
export class OutputPropertyComponent {
	
	@Input() valor: number = 0;

	@Output() mudouValor = new EventEmitter();

	constructor() {}

	decrementa(){
		this.valor--;
		this.mudouValor.emit({novoValor: this.valor});
	}

	incrementa(){
		this.valor++;
		this.mudouValor.emit({novoValor: this.valor});
	}

}