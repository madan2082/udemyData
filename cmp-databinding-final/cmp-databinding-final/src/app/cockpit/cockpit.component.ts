import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    // this.serverElements.push({
    //   type:'server',
    //   name:this.newServerName,
    //   content:this.newServerContent
    // });
  }
  onAddBlurPrint(){
    // this.serverElements.push({
    //   type:'blueprint',
    //   name:this.newServerName,
    //   content:this.newServerContent
    // });
  }

}
