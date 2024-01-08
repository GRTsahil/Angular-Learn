import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server created.";
  serverCount = 0;
  onCreateServer(){
    this.serverCreationStatus = "Server was created ";
    this.serverCount++;
  }
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

}
