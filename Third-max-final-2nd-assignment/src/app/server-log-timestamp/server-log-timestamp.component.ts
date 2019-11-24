import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-log-timestamp',
  templateUrl: './server-log-timestamp.component.html',
  styleUrls: ['./server-log-timestamp.component.css']
})
export class ServerLogTimestampComponent implements OnInit {
  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }

}
