import { Component, OnInit } from '@angular/core';
import { ButtonColor, ButtonType } from 'src/app/shared/model/button.interface';

@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrls: ['./feature-two.component.scss'],
})
export class FeatureTwoComponent implements OnInit {
  constructor() {}

  buttonColor = ButtonColor;
  buttonType = ButtonType;
  buttonLabel = 'Label';

  ngOnInit(): void {}
}
