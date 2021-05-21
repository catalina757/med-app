import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  nameIsValid: boolean = true;
  emailIsValid: boolean = true;
  subjectIsValid: boolean = true;
  messageIsValid: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  get myForm() {
    return this.contactForm.controls;
  }

  submitForm() {
    this.nameIsValid = true;
    this.emailIsValid = true;
    this.subjectIsValid = true;
    this.messageIsValid = true;

    if (this.myForm.name.invalid) {
      this.nameIsValid = false;
    }

    if (this.myForm.email.invalid) {
      this.emailIsValid = false;
    }

    if (this.myForm.subject.invalid) {
      this.subjectIsValid = false;
    }

    if (this.myForm.message.invalid) {
      this.messageIsValid = false;
    }

    console.log('message was sent!');
    console.log(this.myForm.name.value);

    // de resetat inputurile

  }

}

