import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public addPatientServ(patient: Patient): Observable<Patient> {
    return this.httpPatients.post<Patient>(`${this.baseUrl}`, patient);
  }

  public deletePatientServ(id: number): Observable<void> {
    return this.httpPatients.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  phone: string;
  email: string;
}
