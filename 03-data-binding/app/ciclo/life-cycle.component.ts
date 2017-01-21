import { 
	Component,
 	OnInit,
 	OnChanges,
 	DoCheck,
 	AfterContentInit,
 	AfterContentChecked,
 	AfterViewInit,
 	AfterViewChecked,
 	OnDestroy,
 	Input,
 	ViewChild
 	} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'lifecycle',
	template: `
		<p #variavelLocalP>{{ valorInicial }}</p>
		<p>{{variavelLocalP.textContent}}</p>
	`
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
OnDestroy{

	@Input() 
	valorInicial = 10;

	@ViewChild('variavelLocalP') 
	variavelLocalP: HTMLElement;

	constructor() {}

	ngOnInit() {
		console.log(this.variavelLocalP);
	}

	ngOnChanges() {
		
	}

	ngDoCheck(){

	}

	ngAfterContentInit(){

	}

	ngAfterContentChecked(){

	}

	ngAfterViewInit(){

	}

	ngAfterViewChecked(){

	}

	ngOnDestroy(){

	}

	
}