import { Component } from '@angular/core';

@Component({
    'selector': 'app-newserver',
    'templateUrl': './newserver.component.html'
})

export class NewserverComponent {
    serverStatus = 'offline';
    serverId = 10
    constructor() {

    }
    getServerStatus() {
        return this.serverStatus;
    }


}