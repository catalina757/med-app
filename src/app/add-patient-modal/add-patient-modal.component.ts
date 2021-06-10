import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import  { NgForm } from '@angular/forms';
import { Patient } from '../angularServices/patient.service';

@Component({
  selector: 'app-add-patient-modal',
  templateUrl: './add-patient-modal.component.html',
  styleUrls: ['./add-patient-modal.component.scss']
})
export class AddPatientModalComponent implements OnInit {

  // @Output() messageToEmit = new EventEmitter<string>();
  // messageToSendC: string = "Hello Parent !";

  // @Output() patientToEmit = new EventEmitter();
  // patient: Patient[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // sendMessageToParent(message: string) {
  //   this.messageToEmit.emit(message)
  // }


  // createPatient(addPatientModal: NgForm) {
    // this.patientToEmit.emit(addPatientModal);

    // this.patientService.createPatientServ(addPatientModal.value).subscribe((newPatient: Patient) => {
    //   this.patientsList.push(newPatient);
    // addPatientModal.resetForm();
    //   });
    // }
}
