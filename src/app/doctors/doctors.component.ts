import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {

  doctors: Doctor[];
  

  constructor() {
    this.doctors = [];
    this.createDoctor("Иванов Иван Иванович", "Терапевт", 1);
    this.createDoctor("Николаев Николай Николаевич", "Хирург", 2);
    this.createDoctor("Игорьев Игорь Игоревич", "Офтальмолог", 3);
  }

  createDoctor(fio: string, spec: string, id: number) {
    let doctor = new Doctor();
    doctor.FIO = fio;
    doctor.Specialization = spec;
    doctor.id = id;
    this.doctors.push(doctor);
  }

}
