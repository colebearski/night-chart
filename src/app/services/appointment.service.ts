import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { Doctor } from '../models/doctor';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    baseUrl = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    getDoctors(): Observable<Doctor[]> {
        return this.http.get<Doctor[]>(`${this.baseUrl}doctors`);
    }

    getAppointments(doctorId: number): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(`${this.baseUrl}appointments?doctorId=${doctorId}`);
    }
}