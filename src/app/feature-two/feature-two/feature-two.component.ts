import { LoggerService } from 'src/app/core/service/logger.service';
import { Component, OnInit } from '@angular/core';
import { ButtonColor, ButtonType } from 'src/app/shared/model/button.interface';

@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrls: ['./feature-two.component.scss'],
})
export class FeatureTwoComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  buttonColor = ButtonColor;
  buttonType = ButtonType;
  buttonLabel = 'Label';

  ngOnInit(): void {}

  handelOnCLickEvent = (event: Event) => {
    this.loggerService.log(JSON.stringify(event));
  };
}
