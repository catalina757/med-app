import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-patient-modal',
  templateUrl: './patient-modal.component.html',
  styleUrls: ['./patient-modal.component.scss']
})
export class PatientModalComponent implements OnInit {


  @Output() messageToEmit = new EventEmitter<string>();
  messageToSendToP: string = "Hello Parent !";

  // @Output() patientToEmit = new EventEmitter();
  // patient: Patient[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message);
  }

}
