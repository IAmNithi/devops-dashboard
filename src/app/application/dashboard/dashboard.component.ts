import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  application: any;
  service: any;
  constructor() {
    this.application = [{
      'name': 'Java Starter',
      'avatar': 'http://codehustler.org/wp-content/uploads/2012/12/java_logo.png',
      'runtime': 'Liberty-WAR',
      'health': true
    }, {
      'name': 'Mobile Starter',
      'avatar': 'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/android-sdk-icon.png',
      'runtime': 'SDK for Node',
      'health': true
    }, {
      'name': 'Node Demo',
      'avatar': 'http://pluspng.com/img-png/nodejs-logo-vector-png-node-js-logo-nodejs-javascript-source-code-960.png',
      'runtime': 'SDK for Node',
      'health': true
    }, {
      'name': 'PHP Starter',
      'avatar': 'http://www.ecomspark.com/wp-content/uploads/2015/04/page_php.png',
      'runtime': 'WAMP SDK',
      'health': false
    }, {
      'name': 'Swift Starter',
      'avatar': 'https://developer.apple.com/swift/images/swift-og.png',
      'runtime': 'SSWG SDK',
      'health': true
    }];
    this.service = [{
      'name': 'Geospatial Analysis',
      'avatar': 'https://s.gravatar.com/avatar/5227b7b8d51e4c178fdf9ec8d74f12c7?size=496&default=retro',
      'offering': 'Geospatial Analysis',
      'memory': '40'
    }, {
      'name': 'Java Starter:Data Cache',
      'avatar': 'https://s.gravatar.com/avatar/18dc834c936a9b702571707b2d251617?size=496&default=retro',
      'offering': 'Data Cache',
      'memory': '60'
    }, {
      'name': 'Mobile Starter:MAS',
      'avatar': 'https://s.gravatar.com/avatar/f6ddd5036437214edf7effcca48514ec?size=496&default=retro',
      'offering': 'Mobile Application Service',
      'memory': '30'
    }, {
      'name': 'Mobile-Starter:MobileData',
      'avatar': 'https://s.gravatar.com/avatar/88523e9f9d7e53318a85052cd7833613?size=496&default=retro',
      'offering': 'Mobile Data',
      'memory': '10'
    }, {
      'name': 'mobile-starter:Push',
      'avatar': 'https://s.gravatar.com/avatar/bdb2f5981d30d20dd796ad7d42835295?size=496&default=retro',
      'offering': 'Push',
      'memory': '90'
    }];
  }

  ngOnInit() {
  }
}
