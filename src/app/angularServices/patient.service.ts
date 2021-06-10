import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:3000/patients';

  constructor(private httpPatients: HttpClient) { }

  public getPatientsServ(): Observable<Patient[]> {
    return this.httpPatients.get<Patient[]>(`${this.baseUrl}`);
  }

  public createPatientServ(patient: Patient): Observable<Patient> {
    return this.httpPatients.post<Patient>(`${this.baseUrl}`, patient);
  }

  public updatePatientServ(patient:Patient): Observable<Patient> {
    return  this.httpPatients.put<Patient>(`${this.baseUrl}/${patient.id}`, patient);
  }

  public deletePatientServ(patient: Patient): Observable<Patient> {
    return this.httpPatients.delete<Patient>(`${this.baseUrl}/${patient.id}`);
  }

}

export interface Patient {
  id?: number;
  firstName: string;
  lastName: string;
  // streetAddress: string;
  // city: string;
  // phone: string;
  // email: string;

}
