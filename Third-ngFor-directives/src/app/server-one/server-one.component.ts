import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-one',
  templateUrl: './server-one.component.html',
  styleUrls: ['./server-one.component.css']
})
export class ServerOneComponent implements OnInit {
  serverStatus = 'offline';
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
