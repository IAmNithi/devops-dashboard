import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.css']
})
export class ApplicationTableComponent implements OnInit {
  @Input() application: any;
  applicationData: any;
  activeTab: string;
  constructor() {
    this.applicationData = [];
    this.activeTab = 'all';
   }

  ngOnInit() {
    this.applicationData = this.application;
  }

  searchApp(e) {
    this.applicationData = [];
    this.activeTab = 'all';
    if (e.target.value.length !== 0) {
        const enteredValue = e.target.value.toLowerCase();
        const presentValue = this.application.filter(function(data) {
            return data.name.toLowerCase().indexOf(enteredValue) > -1;
        });
        this.applicationData =  presentValue;
    } else {
        this.applicationData =  this.application;
    }
}
tableNav(argument) {
  this.applicationData = [];
  if (argument === 'all') {
    this.activeTab = 'all';
    this.applicationData = this.application;
  } else if (argument === 'running') {
    this.activeTab = 'running';
    for (let i = 0; i <= this.application.length - 1; i++) {
      if (this.application[i].health === true) {
        this.applicationData.push(this.application[i]);
      }
    }
  } else {
    this.activeTab = 'stopped';
    for (let i = 0; i <= this.application.length - 1; i++) {
      if (this.application[i].health === false) {
        this.applicationData.push(this.application[i]);
      }
    }
  }
}
}
