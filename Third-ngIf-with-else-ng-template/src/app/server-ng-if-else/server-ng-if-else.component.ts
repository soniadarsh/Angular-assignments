import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-ng-if-else',
  templateUrl: './server-ng-if-else.component.html',
  styleUrls: ['./server-ng-if-else.component.css']
})
export class ServerNgIfElseComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'server not created yet';
  serverName = 'Test Server';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server is created on button click " + "Server Name Is :: " + this.serverName;
  }

  ngOnInit() {
  }

}
