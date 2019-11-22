import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-event-binding',
  templateUrl: './server-event-binding.component.html',
  styleUrls: ['./server-event-binding.component.css']
})
export class ServerEventBindingComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server created";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  onCreateServer() {
    this.serverCreationStatus = "Server is created"
  }

  ngOnInit() {
  }

}
