import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.css']
})
export class ServicesTableComponent implements OnInit {
  @Input() service: any;
  serviceData: any;
  constructor() {
    this.serviceData = [];
  }

  ngOnInit() {
    this.serviceData = this.service;
  }
  searchService(e) {
    this.serviceData = [];
    if (e.target.value.length !== 0) {
        const enteredValue = e.target.value.toLowerCase();
        const presentValue = this.service.filter(function(data) {
            return data.name.toLowerCase().indexOf(enteredValue) > -1;
        });
        this.serviceData =  presentValue;
    } else {
        this.serviceData =  this.service;
    }
  }
}
