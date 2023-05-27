import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  serverElements:any = [{type:'server',name:'testServer',contant:'just a test',operation:'delete update disable'}];
  onServerAdded(serverData:{serverName:string,serverContant:string,serverOperation:string})
  {debugger
    this.serverElements.push({
      type :'server',
      name:serverData.serverName,
      contant:serverData.serverContant,
      operation:serverData.serverOperation
    });
  }
  onBlueprintAdded(blueprintData:{serverName:string,serverContant:string,serverOperation:string})
  {debugger
    this.serverElements.push({
      type :'blueprint',
      name:blueprintData.serverName,
      contant:blueprintData.serverContant,
      operation:blueprintData.serverOperation
    });
  }
}
