import { Component, Input, OnInit } from '@angular/core';
import { ButtonColor, ButtonType } from '../model/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() color: ButtonColor = ButtonColor.default;
  @Input() type: ButtonType = ButtonType.default;
  constructor() {}

  ngOnInit(): void {}
}
