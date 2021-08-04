import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss']
})
export class CalorieCalculatorComponent implements OnInit {
  //bmr este variabila in care stochezi rezultatul si e public pt ca o vei folosi in html
  public bmr: number | undefined;

  //aici preiei din html inputurile cu form-control
  calorieForm = new FormGroup({
    age: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
  });

  //aceste variabile boolean sunt pentru validari - sa iti dea mesajele de eroare sub input
  ageIsValid: boolean = true;
  heightIsValid: boolean = true;
  weightIsValid: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  //cu acest get returnez controalele din inputuri date de utilizator sa pot folosi valorile
  get myForm() {
    return this.calorieForm.controls;
  }


  submitCalorieForm() {
    this.ageIsValid = true;
    this.heightIsValid = true;
    this.weightIsValid = true;

    if(this.myForm.age.invalid) {
      this.ageIsValid = false;
    }

    if(this.myForm.height.invalid) {
      this.heightIsValid = false;
    }

    if(this.myForm.weight.invalid) {
      this.weightIsValid = false;
    }

    console.log(this.myForm.age.value);

    this.bmr = 88 + 14*this.myForm.weight.value + 5*this.myForm.height.value - 6*this.myForm.age.value;

    console.log(this.myForm);
  }

}
