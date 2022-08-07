import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() drawer: any;
  appName: string;
  constructor(service: ServiceService) {
    this.appName = service.getTitle();
  }

  ngOnInit(): void {}

  handleClick = () => {
    console.log('clicked');
    this.drawer.toggle();
  };
}
