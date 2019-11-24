import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-log-toggle-coloring',
  templateUrl: './server-log-toggle-coloring.component.html',
  styleUrls: ['./server-log-toggle-coloring.component.css']
})
export class ServerLogToggleColoringComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
