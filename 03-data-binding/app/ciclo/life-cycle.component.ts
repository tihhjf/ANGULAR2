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
 	Input
 	} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'lifecycle',
	template: `
		<p>{{ valorInicial }}</p>
	`
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
OnDestroy{

	@Input() valorInicial = 10;

	constructor() {}

	ngOnInit() {
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