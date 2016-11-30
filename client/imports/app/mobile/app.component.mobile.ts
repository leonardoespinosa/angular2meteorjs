import { Component } from '@angular/core';
import { MenuController, Platform, App } from 'ionic-angular';
import { PartiesListMobileComponent } from './parties-list.component.mobile';

import template from './app.component.mobile.html';

if(Meteor.isCordova){
    require('ionic-angular/css/ionic.css');
}

@Component({
    selector: 'app',
    template
})
export class AppMobileComponent {
    rootPage: any;

    constructor(app: App, platform: Platform, menu: MenuController){
        this.rootPage = PartiesListMobileComponent;       
    }
}