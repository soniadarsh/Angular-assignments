import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-two',
  templateUrl: './server-two.component.html',
  styleUrls: ['./server-two.component.css']
})
export class ServerTwoComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'server not created yet';
  serverName = 'Test Server';
  serverCreated = false;
  serversArray = ['test-server1', 'test-server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server is created on button click " + "Server Name Is :: " + this.serverName;
    this.serversArray.push(this.serverName);
  }

}
