import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();
  constructor() {}

  ngOnInit(): void {}

  handleClick = (event: Event) => {
    this.onClick.emit(event);
  };
}
