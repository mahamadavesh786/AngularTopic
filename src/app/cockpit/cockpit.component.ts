import { Component, EventEmitter, Output } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContant:string,serverOperation:string}>;
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContant:string,serverOperation:string}>;
  newServerName = '';
  newContantName = '';
  newServerOperation = '';

  constructor(){}
  onAddServer()
  {debugger
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContant:this.newContantName,
      serverOperation:this.newServerOperation
    });
  }
  onAddBlueprint()
  {debugger
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContant:this.newContantName,
      serverOperation:this.newServerOperation
    });
  }
  onSelected(operationData:any)
  {debugger
    this.newServerOperation = operationData.target.value;
  }
}
