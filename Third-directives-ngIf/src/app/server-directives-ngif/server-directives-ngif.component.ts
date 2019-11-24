import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-directives-ngif',
  templateUrl: './server-directives-ngif.component.html',
  styleUrls: ['./server-directives-ngif.component.css']
})
export class ServerDirectivesNgifComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created yet';
  serverName = 'Test Server';
  serverCreated = false;

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
  }

}
