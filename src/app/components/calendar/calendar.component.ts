import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Doctor } from 'src/app/models/doctor';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  doctor$: Doctor[] = [];
  appointment$: Appointment[] = [];
  displayState: boolean = false;

  constructor(private apptService: AppointmentService) { }

  ngOnInit(): void {
    this.apptService.getDoctors().subscribe((res: Doctor[]) => {
      this.doctor$ = res;
    });
  }

  handleAppointmentView(id: number): void {
    this.apptService.getAppointments(id).subscribe((res: Appointment[]) => {
      this.appointment$ = res;
    });
    this.displayState = true;
  }

  handleDisplayState(): void {
    this.displayState = false;
  }

}
