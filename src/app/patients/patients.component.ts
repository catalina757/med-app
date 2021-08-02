import {Component, OnInit} from '@angular/core';
import {Patient, PatientService} from '../angularServices/patient.service';
import { NgForm } from '@angular/forms';

declare let $: any;


@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

    page: number = 1;

    public patientsList: Patient[] = [];

    constructor(private patientService: PatientService) {
    }

    ngOnInit(): void {
        this.readPatientList();
    }

    readPatientList() {
        this.patientService.getPatientsServ().subscribe((allPatients: Patient[]) => {
            this.patientsList = allPatients;
        })
    }

    receivedChildMessage: string = '';
    getMessage(message: string) {
        this.receivedChildMessage = message;
    }

    // patient: Patient[] = [];
    // getMessage(patient: Patient) {
    //     this.patient = patient;
    // }

    openPatientModal() {
        $('#modal-patient-dialog').modal('show');
    }

    createPatient(addPatientModal: NgForm) {
        this.patientService.createPatientServ(addPatientModal.value).subscribe((newPatient: Patient) => {
            this.patientsList.push(newPatient);
            addPatientModal.resetForm();
        });
    };

    // updatePatient(patient: Patient) {
    //     this.patientService.updatePatientServ(patient).subscribe((updatedPatient) => {
    //
    //     })
    // }

    deletePatient(patient: Patient) {
        this.patientService.deletePatientServ(patient).subscribe(
            () => (this.patientsList = this.patientsList.filter((p) => p.id !== patient.id))
        );

        console.log(this.patientsList);
        console.log(patient);
        console.log(patient.id);
        console.log(patient.firstName);

        return this.patientsList;
    }

}
