import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-ebind-pass-use-data',
  templateUrl: './server-ebind-pass-use-data.component.html',
  styleUrls: ['./server-ebind-pass-use-data.component.css']
})
export class ServerEbindPassUseDataComponent implements OnInit {
  allowNewServer = false;
  serverName = ""
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
}
