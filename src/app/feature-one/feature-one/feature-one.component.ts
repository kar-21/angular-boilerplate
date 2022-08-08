import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LoggerService } from 'src/app/core/service/logger.service';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss'],
})
export class FeatureOneComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private loggerService: LoggerService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loggerService.log('ngOnChanges');
  }
  ngOnInit(): void {
    this.loggerService.log('ngOnInit');
  }
  ngDoCheck(): void {
    this.loggerService.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    this.loggerService.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.loggerService.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.loggerService.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.loggerService.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.loggerService.log('ngOnDestroy');
  }
}
