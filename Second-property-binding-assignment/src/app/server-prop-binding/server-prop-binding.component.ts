import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-prop-binding',
  templateUrl: './server-prop-binding.component.html',
  styleUrls: ['./server-prop-binding.component.css']
})
export class ServerPropBindingComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

}
