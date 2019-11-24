import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-name-reset',
  templateUrl: './server-name-reset.component.html',
  styleUrls: ['./server-name-reset.component.css']
})
export class ServerNameResetComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server created yet";
  username = "";

  constructor() { }

  ngOnInit() {
  }

}
