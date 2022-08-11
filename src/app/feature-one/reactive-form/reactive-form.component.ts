import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonColor } from 'src/app/shared/model/button.interface';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  buttonColor = ButtonColor;
  buttonLabelSubmitName = 'Submit Name';
  buttonLabelSubmitEmail = 'Submit Email';

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {}

  handelOnCLickEvent = () => {
    console.log('>>>>', this.form.value, this.emailFormControl.value);
  };
}
