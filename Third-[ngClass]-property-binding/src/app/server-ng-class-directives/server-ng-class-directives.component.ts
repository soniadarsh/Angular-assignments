import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-ng-class-directives',
  templateUrl: './server-ng-class-directives.component.html',
  styleUrls: ['./server-ng-class-directives.component.css']
})
export class ServerNgClassDirectivesComponent implements OnInit {
  serverStatus = "offline"
  serverId = 10;
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "offline";
  }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === "Online" ? 'greenyellow' : 'mistyrose';
  }

}
