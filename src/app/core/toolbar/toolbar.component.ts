import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() drawer: any;
  constructor() {}

  ngOnInit(): void {}

  handleClick = () => {
    console.log('clicked');
    this.drawer.toggle();
  }
}
