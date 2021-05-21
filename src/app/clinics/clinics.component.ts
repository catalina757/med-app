import { Component, OnInit } from '@angular/core';
import { ClinicService, Clinic } from '../angularServices/clinic.service';


@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {
  page:number = 1;

  public clinicsList: Clinic[] = [];

  constructor(private clinicService: ClinicService) { }

  ngOnInit(): void {
    this.clinicService.getClinics().subscribe((allClinics:Clinic[]) => {
      this.clinicsList = allClinics;
    })
  }

}


