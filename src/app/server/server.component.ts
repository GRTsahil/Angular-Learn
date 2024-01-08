import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-server',
        templateUrl: './server.component.html',

    }
)

export class ServerComponent{
    name: string = 'Server';
    id: number = 3;
    serverStatus: string = 'offline';
    getServerStatus(){
        return this.serverStatus;
    }
}