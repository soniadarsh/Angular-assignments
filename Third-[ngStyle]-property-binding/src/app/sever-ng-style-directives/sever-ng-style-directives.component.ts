import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sever-ng-style-directives',
  templateUrl: './sever-ng-style-directives.component.html',
  styleUrls: ['./sever-ng-style-directives.component.css']
})
export class SeverNgStyleDirectivesComponent implements OnInit {
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
