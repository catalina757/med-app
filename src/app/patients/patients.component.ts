import { Component, OnInit } from '@angular/core';
import { Patient, PatientService } from '../angularServices/patient.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  page:number = 1;

  public patientsList: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatientsServ().subscribe((allPatients: Patient[]) => {
        this.patientsList = allPatients;
    })
  }

  deletePatient(patient:Patient): void {
    this.patientService.deletePatientServ(patient.id).subscribe();
  }

}
