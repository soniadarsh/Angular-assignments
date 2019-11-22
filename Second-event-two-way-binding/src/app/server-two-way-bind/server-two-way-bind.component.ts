import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-two-way-bind',
  templateUrl: './server-two-way-bind.component.html',
  styleUrls: ['./server-two-way-bind.component.css']
})
export class ServerTwoWayBindComponent implements OnInit {
  allowNewServer = false;
  serverName = "jai"
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onKeyUp() {
    console.log(this.serverName);
  }

}
