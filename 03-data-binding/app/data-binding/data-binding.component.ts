import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'exemplo-data-binding',
	templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent {
	constructor() {}

	url = 'http://www.google.com';
	urlImg = 'http://lorempixel.com/400/200/';

}