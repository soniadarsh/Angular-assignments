import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-name',
  templateUrl: './server-name.component.html',
  styleUrls: ['./server-name.component.css']
})
export class ServerNameComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created yet to create server press button';
  serverName = "default name is krishna";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server is created on button click " + "Server Name Is :: " + this.serverName;
  }

}
