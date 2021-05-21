import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpPatients: HttpClient) { }

  public getPatients(): Observable<Patient[]> {
    return this.httpPatients.get<Patient[]>('http://localhost:3000/patients');
  }

  public addPatient(id: number, firstName: string, lastName: string, streetAddress: string, city: string, phone: string, email: string): Observable<Patient[]> {
    return this.httpPatients.post<Patient[]>('http://localhost:3000/patients', {
      id,
      firstName,
      lastName,
      streetAddress,
      city,
      phone,
      email
    })
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
