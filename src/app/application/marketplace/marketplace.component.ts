import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  marketplace: any;
  constructor() {
    this.marketplace = [{
      'name': 'Application Tier Networking & Gateway',
      'type': 'Manage traffic with route services and proxies.',
      'apps' : [{
        'name': 'Apigee',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-apigee.svg'
      }, {
        'name': 'MuleSoft',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-mulesoft.svg'
      }, {
        'name': '18F  Secure Proxy',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-community.svg'
      }]
    }, {
      'name': 'CF Tooling',
      'type': 'Build Pivotal Cloud Foundry integrations, such as service brokers and buildpacks.',
      'apps' : [{
        'name': 'AppDirect',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-community.svg'
      }, {
        'name': 'External SRB',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-community.svg'
      }, {
        'name': 'MetaBuildpack',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-community.svg'
      }, {
        'name': 'Tile Generator',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-community.svg'
      }]
    }, {
      'name': 'DevOps Tooling',
      'type': 'Share responsibility for continuously integrating and deploying new code and debugging with common data.',
      'apps' : [{
        'name': 'Altoros Jenkins',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_altoros-jenkins.png'
      }, {
        'name': 'Concourse',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-concourse@2x.png'
      }, {
        'name': 'Cloudbees Core',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/logo-cloudbees.svg'
      }, {
        'name': 'PagerDuty',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/pagerduty-logo-green-17.png'
      }, {
        'name': '18F BOSH  : Caddy',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-community.svg'
      }, {
        'name': 'vRA SB',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-community.svg'
      }]
    }, {
      'name': 'Identity & Security',
      'type': 'Improve your platform security and simplify end-user management with network encryption and identity services.',
      'apps' : [{
        'name': 'Aqua',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/logo-aqua.svg'
      }, {
        'name': 'Black Duck',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_blackduck@2x.png'
      }, {
        'name': 'Contrast Security',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/logo-contrast-security.svg'
      }, {
        'name': 'Forgerock',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-Forgerock-Logo-Master-2016_1Cblackhorizontal-01.svg'
      }, {
        'name': 'Signal Sciences',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_signal-sciences@2x.png'
      }, {
        'name': 'Snyk',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-snyk.svg'
      }, {
        'name': 'Cyberark',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-cyberark-conjur.svg'
      }, {
        'name': 'Single Sign On',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-ssonew.svg'
      }, {
        'name': 'Twistlock',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_twistlock@2x.png'
      }]
    }, {
      'name': 'Monitoring, Metrics & Logging',
      'type': 'Popular Cloud-Native services for monitoring application performance tracking.',
      'apps' : [{
        'name': 'Altoros Heartbeat',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_altoros_heartbeat@2x.png'
      }, {
        'name': 'Altoros Log Search',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_altoros_logsearch@2x.png'
      }, {
        'name': 'App Dynamics',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_appdynamics_v2@2x.png'
      }, {
        'name': 'Blue Medora',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/logo-blue-medora.png'
      }, {
        'name': 'Weave Works',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_weaveworks@2x.png'
      }, {
        'name': 'PCF Metrics',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-pcf-metrics.svg'
      }, {
        'name': 'Sumo Logic',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_sumologic@2x.png'
      }, {
        'name': 'Sentry',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon-ssonew.svg'
      }, {
        'name': 'Wavefront',
        'logo': 'https://d1fto35gcfffzn.cloudfront.net/images/products/icons/icon_wavefront@2x.png'
      }]
    }];
  }

  ngOnInit() {
  }

}
