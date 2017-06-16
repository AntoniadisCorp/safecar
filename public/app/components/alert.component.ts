import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/index'
 
@Component({
    
    moduleId: module.id,
    selector: 'alert',
    templateUrl: '../../views/main_partials/alert.component.ejs'
})
 
export class AlertComponent {
    message: any;
 
    constructor(private alertService: AlertService) { }
 
    ngOnInit() { this.alertService.getMessage().subscribe(message => { this.message = message; }) }
}