import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private baseUrl = 'http://localhost:3000/clinics';

  constructor(private httpClinics: HttpClient) { }

  public getClinics(): Observable<Clinic[]> {
    return this.httpClinics.get<Clinic[]>(`${this.baseUrl}`);
  }

}

export interface Clinic {
  id: number;
  name: string;
  streetAddress: string;
  city: string;
  phone: string;
  email: string;
  url: string;
  description: string;
}
